import express from "express";
import { controllers } from "../controllers/auth.controllers.js";
import { authorization } from "../middlewares/tokenValidation.js";
import { validation } from "../middlewares/schemaValidation.js";
import { schemas } from "../schemas/auth.schemas.js";

const router = express.Router();

router.post("/signin", validation(schemas.login), controllers.login);

router.post("/signup", validation(schemas.register), controllers.register);

router.post("/logout", controllers.logout);

router.get("/profile", authorization, controllers.profile);

export default router;