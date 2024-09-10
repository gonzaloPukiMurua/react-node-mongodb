import express from "express";
import { controllers } from "../controllers/auth.controllers.js";
const router = express.Router();

router.post("/auth/signin", controllers.signin);

router.post("/auth/signup", controllers.signup);

router.post("/auth/logout", controllers.logout);
