import * as C from "./styles"

export function Input({label, classname, ...rest}){
    return(
    <C.Container>
        <label className={classname}>{label}</label>
        <input {...rest}/>
    </C.Container>
    )
}