import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import * as C from './styles'

import polygon from "../../assets/Polygon.svg";
import receipt from "../../assets/Receipt.svg";

import { FiMenu, FiSearch, FiX, FiLogOut } from 'react-icons/fi';

import { Input } from '../Input'
import { Button } from '../Button'

import { useAuth } from '../../hooks/auth';
import { SearchInput } from '../SearchInput';


export function Header({onChange}){
    const [dropMenu, setDropMenu] = useState(false);

    const { signOut, favorites, user } = useAuth(); 

    const navigate = useNavigate();

    const isAdmin = user && user.isAdmin === 1;

    function handleMenu(){
        setDropMenu(!dropMenu);
    }
    
    function logOut(){
        navigate('/');
        signOut();
    }


    return(
    <C.Container>
        <div className='desktop'>
            <C.Logo>
                <img src={polygon} alt="Fígura plana hexagonal cinza"/>
                <h1>food explorer {user && isAdmin && <span>admin</span>}</h1>
            </C.Logo>

            <SearchInput onChange={onChange}/>

            <Button onClick={() => {isAdmin ? navigate('/add'): ()=>{}}}>
                {isAdmin 
                ? <>Novo prato</>
                :<div className='addCart'>
                    <img src={receipt} alt="notinha"/>
                    Pedidos (0)
                 </div>
                }
            </Button>

            <C.IconButton onClick={logOut}>
                <FiLogOut/>
            </C.IconButton>
        </div>
        <div className={!dropMenu ? `mobile ${!isAdmin? 'menuFalse' : 'MenuOn'}` : 'hidden' }>
            <C.IconButton onClick={handleMenu}>
                <FiMenu/>
            </C.IconButton>

            <C.Logo>
                    <img src={polygon} alt="Fígura plana hexagonal cinza"/>
                    <h1>food explorer {user && isAdmin && <span>admin</span>}</h1>
            </C.Logo>

            {  !isAdmin &&       
            <C.IconButton>
                <img src={receipt} alt="Receita ícone"/>
                <span>{favorites.length}</span>
            </C.IconButton>
            }
        </div>
        <div className={dropMenu ? 'mobile MenuOn' : 'hidden'}>
            <C.IconButton onClick={handleMenu}>
                <FiX/>
            </C.IconButton>

            <C.Logo>
                <h1>Menu</h1>
            </C.Logo>


        </div>
        <C.Menu className={dropMenu ? 'show' : 'hidden'}>
            <C.Search>
                <FiSearch/>
                <Input placeholder="Busque por pratos ou ingredientes" onChange={onChange}/>
            </C.Search>
            <ul>
                {user && isAdmin &&
                    <li><C.IconButton onClick={() => navigate('/add')}>Novo Prato</C.IconButton></li>
                } 
                <li><C.IconButton onClick={logOut}>Sair</C.IconButton></li>
            </ul>
        </C.Menu>
    </C.Container>

    );
}
