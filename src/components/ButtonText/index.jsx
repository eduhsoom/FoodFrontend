import { useNavigate } from "react-router-dom"

import * as C from "./styles"

export function ButtonText({text, link, icon: Icon, ...rest}){
    const navigate = useNavigate();

    return(
    <C.Container {...rest} onClick={() => navigate(link)}>
       {Icon && <Icon/>}
       {text}
    </C.Container>
    )
}