import { createContext, useEffect, useState } from "react";

export const ContextLogin = createContext({});

export const ProviderLogin = ({children}) => {
    const [user, setUser] = useState();
    
    useEffect(() => {
        const userToken = localStorage.getItem('user_token');
        const userStorage = localStorage.getItem('users_db');
        if(userToken && userStorage){
            const hasUser = JSON.parse(userStorage)?.filter(
                user => user.email === JSON.parse(userToken).email
            );
            if(hasUser) setUser(hasUser[0]);
        }
    }, []);

    const signin = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem('users_db'));
        const hasUser = usersStorage?.filter(user => user.email === email);
        if(hasUser?.length){
            if(hasUser[0].email === email && hasUser[0].password === password){
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({email, token}))
                setUser(hasUser[0])
                return ;
            } else {
                return 'Email ou senha incorretos!'
            }
        }
        else {
            return 'Usuário não cadastrado!'
        }
    }

    const signup = (email, password, name) => {
        const usersStorage = JSON.parse(localStorage.getItem('users_db'));
        const hasUser = usersStorage?.filter(user => user.email === email);

        if(hasUser?.length) return 'E-mail já cadastrado'

        let newUser ; 
        if(usersStorage){
            newUser = [...usersStorage, {email, password, name}];
        }else{
            newUser = [{email, password, name}]
        }

        localStorage.setItem('users_db', JSON.stringify(newUser));
        return;
    }
    
    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    }

    return(
        <ContextLogin.Provider value={{user, signed: !!user, signin, signup, signout}}>
            {children}
        </ContextLogin.Provider>
    )
}
