import { Container } from "./styles";
import {AiOutlineSearch} from 'react-icons/ai'

export function SearchInput({...rest}){
    return(
        <Container>
            <AiOutlineSearch/>
            <input type="text" {...rest} placeholder="Busque por pratos ou ingredientes"/>
        </Container>
    )
}