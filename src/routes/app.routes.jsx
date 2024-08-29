import {Routes, Route} from 'react-router-dom';

import { Home } from '../pages/Home';
import { Add } from '../pages/Add';
import { Details } from '../pages/Details';


export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/details/:id" element={<Details/>}/>
        </Routes>
    );
}