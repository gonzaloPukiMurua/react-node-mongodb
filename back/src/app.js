import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import indexRoutes from "./routers/index.router.js";
import authRoutes from "./routers/auth.router.js";
import apiRoutes from "./routers/api.router.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();

app.set("port", process.env.PORT || 4000);
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(indexRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/product", apiRoutes);

export default app;