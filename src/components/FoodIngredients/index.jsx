import * as C from './styles'

import {FiX, FiPlus} from 'react-icons/fi'

export function FoodIngredients({isNew = false, onClick, value, width,...rest}){
    return(
        <C.Container isNew={isNew}>
            <input type="text" 
            value={value}
            readOnly={!isNew}
            style={{ width: width +'px'}}
            {...rest}
            />

            <button 
            type='button'
            onClick={onClick}
            >
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
        </C.Container>
    )
}