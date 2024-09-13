import app from "./src/app.js";
import {connection} from "./src/config/db.js";
import dotenv from "dotenv";

dotenv.config();

const startApp = async () =>{
    try{
        await connection();
        app.listen(app.get("port"), () => {
            console.log(`Server running on port ${app.get("port")}`);
        })
    }catch(error){
        console.error(`Error: ${error.message}`);
    }
}

startApp();