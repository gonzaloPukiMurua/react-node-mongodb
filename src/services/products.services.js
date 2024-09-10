import { Products } from "../models/product.model.js";
export const services = {
    getProducts : async () => {
        try{
            return await Products.find().lean();
        }catch(error){
            console.error(`Error: ${error.message}`);
        }        
    },
    getProductsById : async (id) => {
        try{ 
            return await Products.find({_id: id}).lean();
        }catch(error){
            console.error(`Error: ${error.message}`);
        }        
    },
    addProduct : async (product) => {
        try{
            return new Products(product).save();
        }catch(error){
            console.error(`Error: ${error.message}`);
        }
    },
    editProduct : async (id, update) => {
        try{
            return await Products.findOneAndUpdate({_id: id}, update);
        }catch(error){
            console.error(`Error: ${error.message}`);
        }
    },
    deleteProduct : async (id) => {
        try{ 
            return await Products.findOneAndDelete(id);
        }catch(error){
            console.error(`Error: ${error.message}`);
        }
    }
}