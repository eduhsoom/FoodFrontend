import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';
import * as C from './styles';
import { AiOutlineLeft } from 'react-icons/ai'
import { FiPlus, FiMinus,} from 'react-icons/fi'

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Footer } from '../../components/Footer';

import receipt from "../../assets/Receipt.svg";


import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';


export function Details(){

    const [avatarFood, setAvatarFood] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState();
    const [ingredients, setIngredients] = useState([]);

    const {user} = useAuth();

    const isAdmin = user && user.isAdmin === 1;

    const params = useParams();
    const navigate = useNavigate();
    
    const [quantity, setQuantity] = useState(1);

    function ReduceQuantity(){
        return setQuantity(prevState => --prevState);
     }
     function IncreaseQuantity(){
        setQuantity(prevState => ++prevState)
     }
 
      useEffect(() => {
        async function fetchFood() {
          const response = await api.get(`/foods/${params.id}`);
          console.log(response.data);

          const { category, description, price, title, ingredients} = response.data;
          const imageURl = response.data && `${api.defaults.baseURL}/files/${response.data.avatarFood}`;
          setAvatarFood(imageURl)
          setName(title);
          setDescription(description);
          setPrice(price);
          setIngredients(ingredients.map(ingredient => ingredient.name))
        }
    
        fetchFood();
      }, []);
      

 return(
    <C.Container>
        <Header/>
        <C.Content>
            <ButtonText text={`Voltar`} icon={AiOutlineLeft} link={'/'}/>
            <div className='page'>
                <img src={avatarFood} alt="Imagem do prato"/>
                <div>
                    <div className='infos'>
                        <h1>{name}</h1>
                        <p>{description}</p>
                        <div className='ingredients'>
                            { ingredients && ingredients.map( ingredient => (
                                <span key={ingredient}>{ingredient}</span>
                            ))}
                        </div>
                    </div>

                    <div className='controls'>
                    { isAdmin ? 
                        <Button onClick={() => navigate(`/edit/${params.id}`)}>
                            Editar Prato
                        </Button>
                        :
                        <>
                            <div>
                                <button onClick={ReduceQuantity} disabled={quantity <= 1}><FiMinus/></button>
                                <span>{quantity < 10 ? `0${quantity}` : quantity}</span>
                                <button onClick={IncreaseQuantity}><FiPlus/></button>
                            </div>

                            <Button>
                                <div className='addCart'>
                                    <img src={receipt} alt="notinha"/>
                                    pedir ∙ R$ {(price * quantity).toFixed(2)}
                                </div>
                            </Button>
                        </>
                    }
                    </div>
                </div>
            </div>
        </C.Content>
        <Footer/>
    </C.Container>
 )
}