import axios from "axios";
const apiUri = import.meta.env.VITE_API_URI || "http://localhost:3000/api";
export const request = {
    post: async (endpoint, data) => {
        try{
            const response = await axios.post(`${apiUri}/${endpoint}`, data);
            return response.data;
        }catch(error){
            console.error(`Error: ${error.message}`);
        }
    },
    get: async (endpoint) => {
        try{
            const response = await axios.get(`${apiUri}/${endpoint}`);
            return response.data;
        }catch(error){
            console.error(`Error: ${error.message}`);
        }
    }
}