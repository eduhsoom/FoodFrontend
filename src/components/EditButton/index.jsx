import * as C from "./styles"
import { useNavigate } from "react-router-dom";
import pencil from '../../assets/Pencil.svg'


export function EditButton({food}){
    const navigate = useNavigate()

    const handleEditNavigate = () => {
        navigate(`/edit/${food.id}`);
      }

    return(
    <C.Container onClick={handleEditNavigate}>
         <img src={pencil} className="edit" alt="lápis para editar"/>
    </C.Container>
    )
}