import * as C from "./styles"

export function Button({children, exclude = false, add = false, ...rest}){
    return(
    <C.Container {...rest} exclude={exclude} add={add}>
       {children}
    </C.Container>
    )
}