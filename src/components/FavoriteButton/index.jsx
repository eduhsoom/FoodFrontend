import { useEffect } from "react";
import * as C from "./styles"
import { useAuth } from "../../hooks/auth";
import { AiOutlineHeart, AiFillHeart,} from 'react-icons/ai'

export function FavoriteButton({food}){
    const { favorites, setFavorites} = useAuth();

    const handleAddFavoriteFood = () => {
        setFavorites(prevState => [...prevState, food]);
      }
  
      const handleRemoveFavoriteFood = () => {
        setFavorites(prevState => prevState.filter(favorite => favorite.title !== food.title));
      }
  
      const isFavorite = favorites.some(favorite => favorite.title === food.title);

      useEffect(() => {
        localStorage.setItem("@explorerfoods:favorites", JSON.stringify(favorites));
      }, [favorites])

    return(
    <C.Container onClick={() => { isFavorite ? handleRemoveFavoriteFood() : handleAddFavoriteFood()}}>
     {
         isFavorite ? <AiFillHeart className="favorite" /> : <AiOutlineHeart className="favorite"/>
      } 
    </C.Container>
    )
}