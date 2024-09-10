import mongoose from "mongoose";
export const connection = async () => {
    try{
        const conn = await mongoose.connect(process.env.DB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(error){
        console.error(error);
    }
}