import {Users} from "../models/user.model.js";
export const services = {
    login : async (user) => {
        try{
            return await Users.findOne(user).lean();
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
    }
}