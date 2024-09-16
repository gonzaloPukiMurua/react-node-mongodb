import { createContext, useContext, useState } from "react";
import { auth } from "../api/auth.js";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error("useAuth must be used within an AuthProvider");
    return context
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); //state y seter del estado user;
    const [authenticated, setAuthenticated] = useState(false);
    const signup = async (user) => {
        const response = await auth.register(user);
        console.log(response);
        setUser(response.data);
    }

    const authenticate = () => {
        setAuthenticated(true)
    }

    return (
        <AuthContext.Provider value = {{
            signup,
            user,
            authenticate,
            authenticated
            }}>
            {children}
        </AuthContext.Provider>
    );
}