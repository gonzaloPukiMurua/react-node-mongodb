import { createAccesToken } from "../lib/jwt.js";
import { services } from "../services/auth.services.js";
import { bcrypt } from "../lib/bcrypt.services.js"
import { Users } from "../models/user.model.js";

export const controllers = {
    login: async (req, res) => {
        try{
            const {email, password} = req.body;           
            const userFound = await services.findUserByEmail({email});
            if(!userFound) return res.status(400).json({message: "User not found!"});
            const passwordMatch = await bcrypt.decrypt(password, userFound.password);
            if(!passwordMatch) return res.status(400).json({message: "Incorrect password!"});
            const token = await createAccesToken({id: userFound._id});
            res.cookie("token", token);
            res.status(200).json({
                id: userFound._id,
                username: userFound.username,
                email: userFound.email,
                createdAt: userFound.createdAt,
                updatedAt: userFound.updatedAt
            });
        }catch(error){
            console.error(`Error: ${error.message}`);
        }
    },
    register: async (req, res) => {
        const {username, email, password} = req.body;
        try{
            const userFound = await services.findUserByEmail(email);
            if(userFound) return res.status(400).json({message: "User already exists."})
            const user = {
                username,
                email,
                password: await bcrypt.encrypt(password)
            };
            const userSigned = await services.register(user);
            const token = await createAccesToken({id: userSigned._id});
            res.cookie("token", token);
            res.status(200).json({
                id: userSigned._id,
                username: userSigned.username,
                email: userSigned.email,
                createdAt: userSigned.createdAt,
                updatedAt: userSigned.updatedAt
            });
        }catch(error){
            console.error(`Error: ${error.message}`);
        }
    },
    logout: (req, res) => {
        res.cookie("token", "", {expires: new Date(0)});
        return res.sendStatus(200)
    },
    profile: async (req, res) => {
        const userFound = await services.findUserById(req.user.id);
        if(!userFound) return res.status(401).json({message: "User not found!"});
        return res.status(200).json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        });
    }
}