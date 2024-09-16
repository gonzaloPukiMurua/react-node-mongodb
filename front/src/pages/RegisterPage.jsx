import {useForm} from "react-hook-form";
import { auth } from "../api/auth";

export function RegisterPage(){
    const {register, handleSubmit} = useForm();
    const onSubmit = handleSubmit(async (values) => {
        const response = await auth.register(values)
        console.log(response);
    });

    return (
        <div className="bg-zinc-800 max-w-md">
            <form onSubmit={onSubmit}
                action="">
                <input type="text" { ... register("username", {required: true})} className="w-full bg-zinc-700 text-black px-4 py-2 rounded-md" placeholder="Username"/>
                <input type="text" { ... register("email", {required: true})} className="w-full bg-zinc-700 text-black px-4 py-2 rounded-md" placeholder="Email"/>
                <input type="text" { ... register("password", {required: true})} className="w-full bg-zinc-700 text-black px-4 py-2 rounded-md" placeholder="Password"/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
