import { useState, useEffect } from "react";

import * as C from "./styles"

import ContentMobileImage from '../../assets/Foods.png'
import ContentDesktopImage from '../../assets/contentImage.png'

import {api} from '../../services/api'

import { Header } from '../../components/Header';
import { Footer } from "../../components/Footer";
import { FoodCard } from "../../components/FoodCard";

export function Home(){
    const [search, setSearch] = useState("");
    const [foods, setFoods] = useState([]);
    const [categories, setCategories] = useState([]);
    const [fetch, setFetch] = useState(true);

    useEffect(() => {
        async function fetchFoods(){
            await api.get(`/foods?title=${search}`).then(({data}) => {setFoods(data), setFetch(false)})
        }

        fetchFoods();
    },  [search]);

    useEffect(() => {
        function groupCategories(){
            const filteredCategories = [];
            const listFoods = foods.map(food =>  filteredCategories.push(food.category));
            const deleteEqualCategories = filteredCategories.filter((category, index) => filteredCategories.indexOf(category) === index);
            setCategories(deleteEqualCategories);
            console.log(categories)
        }
        groupCategories();

    }, [foods]);

    return(
        <C.Container>
            <Header onChange={e => setSearch(e.target.value)}/>
        { fetch ? 'Carregando...':            
        <C.Content>
                <C.Info>
                    <div className="ImageMobileDiv">
                        <img src={ContentMobileImage} alt="Macarons voando de diversas cores"/>
                    </div>
                    <div className="ImageDesktopDiv">
                        <img src={ContentDesktopImage} alt="Macarons voando de diversas cores"/>
                    </div>
                    <div className="InfoText">
                        <h2>sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </C.Info>

                {
                foods && categories.map((category, index) => (
                    <C.Section key={String(index)}>
                        <h1>{category}</h1>
                        <div className="cards">
                        {
                            foods && foods.filter(food => food.category == category).map(food => (
                                <FoodCard food={food} key={String(food.id)}/>
                            ))
                        }
                        </div>
                    </C.Section>
                ))
                }
                <Footer/>
            </C.Content>      
            }  
        </C.Container>
    );
}