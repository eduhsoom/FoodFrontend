import * as C from './style'

import Polygon from '../../assets/Polygon_gray.svg'

export function Footer(){
    return(
        <C.Container>
            <C.Logo>
                <img src={Polygon} alt="Fígura plana hexagonal cinza"/>
                <h2>food explorer</h2>
            </C.Logo>

            <span>© 2023 - Todos os direitos reservados.</span>
        </C.Container>
    );
}