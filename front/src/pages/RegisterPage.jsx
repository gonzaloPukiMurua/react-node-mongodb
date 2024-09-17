import {useForm} from "react-hook-form";
import { auth } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";


export function RegisterPage(){
    const {register, handleSubmit, formState: {
        errors
    }} = useForm();
    const {signup, authenticated} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(authenticated)  navigate("/products");
    }, [authenticated]);

    const onSubmit = handleSubmit(async (values) => {
        const response = await auth.register(values)
        signup(response);
    });

    return (
        <div className="bg-zinc-800 max-w-md">
            <form onSubmit={onSubmit}
                action="">
                <input type="text" { ... register("username", {required: true})} className="w-full bg-zinc-700 text-black px-4 py-2 rounded-md" placeholder="Username"/>
                {errors.username && <p className="text-red-500">Username is required</p>}
                <input type="text" { ... register("email", {required: true})} className="w-full bg-zinc-700 text-black px-4 py-2 rounded-md" placeholder="Email"/>
                {errors.email && <p className="text-red-500">Email is required</p>}
                <input type="text" { ... register("password", {required: true})} className="w-full bg-zinc-700 text-black px-4 py-2 rounded-md" placeholder="Password"/>
                {errors.password && <p className="text-red-500">Password is required</p>}
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
