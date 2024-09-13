import {useForm} from "react-hook-form";
import { auth } from "../api/auth";

export function LoginPage(){
    const {register, handleSubmit} = useForm();

    return (
        <div className="bg-zinc-800 max-w-md">
            <form onSubmit={handleSubmit( async values => {
                console.log(values);
                const response = await auth.login(values);
                console.log(response);
                })}
                action="">
                <input type="text" { ... register("email", {required: true})} className="w-full bg-zinc-700 text-black px-4 py-2 rounded-md" placeholder="Email"/>
                <input type="text" { ... register("password", {required: true})} className="w-full bg-zinc-700 text-black px-4 py-2 rounded-md" placeholder="Password"/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

