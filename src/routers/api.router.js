import express from "express";
import { constrollers } from "../controllers/products.controllers.js";

const router = express.Router();

router.get("/product", (req, res) => {
    res.status(200).json({message: "products"});
})

router.get("/product/all_products", constrollers.getProducts);

router.get("/product/:id", constrollers.getProductsById);

router.post("/product/add_product", constrollers.addProduct);

router.get("/product/edit/:id", constrollers.getProductsById)

router.put("/product/edit/:id", constrollers.editProduct);

router.delete("/product/delete/:id", constrollers.deleteProduct);

export default router;