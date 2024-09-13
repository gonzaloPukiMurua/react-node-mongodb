import axios from "axios";
const apiUri = import.meta.env.VITE_API_URI || "http//localhost:4000";
export const request = {
    post: async (endpoint, data) => {
        try{
            const response = await axios.post(`${apiUri}/${endpoint}`, data);
            console.log(response);
        }catch(error){
            console.error(`Error: ${error.message}`);
        }
    },
    get: (endpoint) => axios.get(`${apiUri}/${endpoint}`)
}