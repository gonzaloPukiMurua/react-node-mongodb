import {Users} from "../models/user.model.js";
export const services = {
    findUserByEmail : async (mail) => {
        try{
            return await Users.findOne(mail).lean();
        }catch(error){
            console.error(`Error: ${error.message}`);
        }
    },
    register : async (user) => {
        try{
            return await new Users(user).save();
        }catch(error){
            console.error(`Error: ${error.message}`);
        }
    },
    findUserById: async(id) => {
        try{
            return await Users.findById(id);
        }catch(error){
            console.error(`Error: ${error.message}`);
        }
    }
}