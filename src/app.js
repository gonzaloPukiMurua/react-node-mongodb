import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import indexRouter from "./routers/index.router.js";
import apiRouter from "./routers/api.router.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();

app.set("port", process.env.PORT || 4000);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(indexRouter);
app.use(apiRouter);

export default app;