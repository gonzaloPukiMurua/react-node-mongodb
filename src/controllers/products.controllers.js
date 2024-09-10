import {services} from "../services/products.services.js";

export const constrollers = {
    getProducts: async (req, res) => {
        console.log("Estamos en api/product/all_products");
        try{
            const product = await services.getProducts();
            res.status(200).json({products: product})
        }catch(error){
            res.status(400).json({message: "Error en en servidor."});
            console.error(`Error: ${error.message}`);
        }
    },
    getProductsById: async (req, res) => {
        const {id} = req.params;
        try{
            const product = await services.getProductsById(id);
            console.log("Producto: ", product);
            res.status(200).json({product: product});
        }catch(error){
            res.status(400).json({message: "Error en en servidor."});
            console.error(`Error: ${error.message}`);
        }
    },
    addProduct: async (req, res) => {
        const product = req.body;
        try{
            const response = await services.addProduct(product);
            console.log("Producto agregado: ", response);
            res.status(200).json({message: "Producto agregado."});
        }catch(error){
            res.status(400).json({message: "Error en en servidor."});
            console.error(`Error: ${error.message}`);
        }
    },
    editProduct: async (req, res) => {
        const {id} = req.params;
        const update = req.body;
        try{
            const product = await services.editProduct(id, update);
            console.log("Producto actualizado: ", product);
            res.status(200).json({message: "Producto actualizado."});
        }catch(error){
            res.status(400).json({message: "Error en en servidor."});
            console.error(`Error: ${error.message}`);
        }
    },
    deleteProduct: async (req, res) => {
        const {id} = req.params;
        try{
            const product = await services.deleteProduct(id);
            console.log("Producto eliminado: ", product);
            res.status(200).json({message: "Producto eliminado."});
        }catch(error){
            res.status(400).json({message: "Error en en servidor."});
            console.error(`Error: ${error.message}`);
        }
    }
}