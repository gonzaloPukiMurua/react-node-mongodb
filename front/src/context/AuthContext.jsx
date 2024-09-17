import { createContext, useContext, useState } from "react";
import { auth } from "../api/auth.js";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error("useAuth must be used within an AuthProvider");
    return context
}

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null); //state y setState del estado user;
    const [authenticated, setAuthenticated] = useState(false); //state y setState del estado authenticated;
    const [errors, setErrors] = useState(false);
    const signup = async (user) => {
        try{
            const response = await auth.register(user);
            console.log(response);
            setUser(response.data);
            setAuthenticated(true)
        }catch(error){
            console.error(`Error: ${error.message}`);
            setErrors(error.response.data);
        }
        
    }

    const signin = async (user) => {
        try{
            const response = await auth.login(user);
            console.log(response);

        }catch(error){
            console.error(`Error: ${error.message}`);
        }
    }

    const logout = async (user) => {
        try{
            const response = await auth.logout(user);
            console.log(response);
        }catch(error){
            console.error(`Error: ${error.message}`); 
        }
    }

    return (
        <AuthContext.Provider value = {{
            signup,
            signin,
            logout,
            errors,
            user,
            authenticated
            }}>
            {children}
        </AuthContext.Provider>
    );
}