import express from "express";
import { constrollers } from "../controllers/products.controllers.js";

const router = express.Router();

router.get("/all_products", constrollers.getProducts);

router.get("/:id", constrollers.getProductsById);

router.post("/add_product", constrollers.addProduct);

router.get("/edit/:id", constrollers.getProductsById)

router.put("/edit/:id", constrollers.editProduct);

router.delete("/delete/:id", constrollers.deleteProduct);

export default router;