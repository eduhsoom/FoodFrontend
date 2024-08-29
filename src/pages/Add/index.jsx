import { useState } from 'react';
import { toast } from 'react-toastify';

import * as C from './styles';
import { AiOutlineLeft, AiOutlineDownload } from 'react-icons/ai'

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { FoodIngredients } from '../../components/NoteItem';

import { api } from '../../services/api';
import { Footer } from '../../components/Footer';


export function Add(){
    const [pictureFile, setPictureFile] = useState(null);

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState();

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState('');


    const handleAddIngredient = () => {
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient('');
    }

    const handleRemoveIngredient = (deleted) => {
        setIngredients(prevState => [...prevState.filter(ingredient => ingredient !== deleted)])
    }

    const handlePictureFile = () => {
        const file = event.target.files[0];
        setPictureFile(file);
        console.log(file)
    }
    

      function handleAddFood() {
        if(!category || !name || !ingredients || !price || !description) {
          toast.warn("Preencha todos os campos!")
          return;
        }
    
        const formData = new FormData();

        formData.append("category", category);
        formData.append("avatarFood", pictureFile);
        formData.append("title", name);
        formData.append("price", price);
        formData.append("description", description);
        
        for (let i = 0; i < ingredients.length; i += 1) {
            formData.append("ingredients", ingredients[i]);
          }

        console.log(formData)
        api.post("/foods", formData)
        .then(() => {
          toast.success("Prato criado com sucesso!");
        })
        .catch((error) => {
          if (error.response) {
            toast.error(error.response.data.message);
          } else {
            toast.error("Erro ao criar o prato");
          }
        });
      }
    
    

 return(
    <C.Container>
        <Header/>
        <C.Content>
            <ButtonText text={`Voltar`} icon={AiOutlineLeft} link={'/'}/>

            <C.Form>
                <h1>Novo Prato</h1>
                <div className="col-3">
                        <div className="inputWrapper food">
                            <span>Imagem do prato</span>

                            <label htmlFor="avatar">
                                <AiOutlineDownload/>
                                <input 
                                type='file' 
                                id='avatar'
                                onChange={handlePictureFile}
                                /> 

                                <span>{pictureFile ? pictureFile.name : 'Selecione a Imagem'}</span>
                            </label>
                        </div>

                        <div className="inputWrapper">
                            <label htmlFor="name">Nome</label>
                            <input 
                            type="text" 
                            id='name' 
                            placeholder='Ex.: Salada Ceasar'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            />
                        </div>

                        <div className="inputWrapper select">
                            <label htmlFor='categoria'>Categoria</label>
                            <select name="categoria" id="categoria" value={category} onChange={e => {setCategory(e.target.value)}}>
                                <option value="">Selecionar</option>
                                <option value="Refeições">Refeição</option>
                                <option value="Pratos Principais">Prato Principal</option>
                                <option value="Sobremesas">Sobremesa</option>
                                <option value="Bebidas">Bebida</option>
                            </select>
                        </div>
                </div>
                <div className="col-2">
                    <C.Section>
                        <label>Ingredientes</label>
                        <div>
                            {ingredients &&
                                ingredients.map((ingredient, index) => (
                                    <FoodIngredients key={String(index)} value={ingredient} width={ingredient.length * 8.5} onClick={() => handleRemoveIngredient(ingredient)}/>
                                ))
                            }
                            
                            <FoodIngredients 
                            isNew={true} 
                            value={newIngredient} 
                            onChange={e => setNewIngredient(e.target.value)} 
                            onClick={handleAddIngredient}
                            width={100}
                            placeholder='Adicionar'/>
                        </div>
                    </C.Section>
                    
                    <div className="inputWrapper">
                        <label htmlFor="price">Preço</label>
                        <input 
                        type="number" 
                        id='price' 
                        placeholder='R$: 00.00'
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        />
                    </div>
                </div>       
                
                <div className="inputWrapper textarea">
                    <label htmlFor='textarea'>Descrição</label>
                    <textarea name="textarea" id="textarea" placeholder='Fale brevemente sobre o prato, seus ingredientes e composição' value={description} onChange={e => setDescription(e.target.value)}/>
                </div>
                <div className="push">
                    <Button add type="button" onClick={handleAddFood}>Salvar Alterações</Button>     
                </div>          
            </C.Form>
            
        </C.Content>
        <Footer/>
    </C.Container>
 )
}