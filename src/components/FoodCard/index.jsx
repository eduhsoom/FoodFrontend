import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus, FiMinus,} from 'react-icons/fi'

import * as C from "./styles";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Button } from "../Button";
import { FavoriteButton } from "../FavoriteButton";
import { EditButton } from "../EditButton";

export function FoodCard({food}){
    const avatarUrl = food.avatarFood ? `${api.defaults.baseURL}/files/${food.avatarFood}` : null
    const [quantity, setQuantity] = useState(1);
    
    const navigate = useNavigate();

    const { user } = useAuth();

    const isAdmin = user && user.isAdmin === 1

    function ReduceQuantity(){
       return setQuantity(prevState => --prevState);
    }
    function IncreaseQuantity(){
       setQuantity(prevState => ++prevState)
    }


    return(
    <C.Container>
      {isAdmin ? <EditButton food={food}/> : <FavoriteButton food={food}/>}
      
      
        <img src={avatarUrl} alt="Foto da comida" />
         <a onClick={() => navigate(`/details/${food.id}`)}>{food.title} &gt;</a>
         <p>{food.description}</p>
       <h2>R$ {(food.price * quantity).toFixed(2)}</h2>
      {user && user.isAdmin !== 1 &&
      <div className="controls">
       <div className="quantity">
        <button onClick={ReduceQuantity} disabled={quantity <= 1}><FiMinus/></button>
        <span>{quantity < 10 ? `0${quantity}` : quantity}</span>
        <button onClick={IncreaseQuantity}><FiPlus/></button>
       </div>

       <Button>Incluir</Button>
       </div>
      }
    </C.Container>
    )
}