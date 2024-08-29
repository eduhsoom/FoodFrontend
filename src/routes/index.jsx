import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { AdminRoutes } from "./admin.routes";

import { useAuth } from "../hooks/auth";


export function Routes(){
    const { user } = useAuth();
    const isAdmin = user && user.isAdmin === 1;
    return(
        <BrowserRouter>
            {user ? (isAdmin ? <AdminRoutes/>: <AppRoutes/>) : <AuthRoutes/> }
        </BrowserRouter>
    )
}