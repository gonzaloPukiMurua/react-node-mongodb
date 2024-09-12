import bcryptjs from "bcryptjs";

export const bcrypt = {
    encrypt: async (password) => {
        try {
            return await bcryptjs.hash(password, 10);
        }catch(error){
            console.error(`Error: ${error.message}`);
        }
    },
    decrypt: async (password, passwordRegistered) => {
        try{
            return await bcryptjs.compare(password, passwordRegistered);
        }catch(error){
            console.error(`Error: ${error.message}`);
        }
    }
}