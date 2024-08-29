import { createContext, useContext, useEffect, useState } from 'react';

import { api } from '../services/api';

export const AuthContext = createContext({});


function AuthProvider({children}) {
    const [data, setData] = useState({});
    const [favorites, setFavorites] = useState([]);
      
    async function signIn({ email, password }){
        try{
            const response = await api.post('/sessions', {email, password});
            const {user, token} = response.data;

            
            localStorage.setItem("@explorerfoods:user", JSON.stringify(user));
            localStorage.setItem("@explorerfoods:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({user, token});

        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível realizar login!");
            }
        }
    }

    async function signOut(){
        localStorage.removeItem("@explorerfoods:token");
        localStorage.removeItem("@explorerfoods:user");
        
        setData({});
     }      

     useEffect(() => {
        const token = localStorage.getItem("@explorerfoods:token")
        const user = localStorage.getItem("@explorerfoods:user")
        const favorites = localStorage.getItem("@explorerfoods:favorites")

        if(token && user){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({
                token,
                user: JSON.parse(user)
            })
        }

        if(favorites){
            setFavorites(JSON.parse(favorites));
        }
    }, [])

    return(
        <AuthContext.Provider value={{signIn, signOut, user: data.user, favorites, setFavorites}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}


export { AuthProvider, useAuth }

