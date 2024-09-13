import {useForm} from "react-hook-form";

export function RegisterPage(){
    const {register} = useForm();

    return (
        <div className="bg-zinc-800 max-w-md">
            <form onSubmit={handleSubmit(values => console.log(values))} action="">
                <input type="text" { ... register("username", {required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" placeholder="Username"/>
                <input type="text" { ... register("email", {required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" placeholder="Email"/>
                <input type="text" { ... register("password", {required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" placeholder="Password"/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
