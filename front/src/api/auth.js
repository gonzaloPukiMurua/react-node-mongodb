import {request} from "./axios.js";

export const auth = {
    register: async (user) => {
        return await request.post("auth/signup", user);
    },
    login: async (user) => {
        return await request.post("auth/signin", user);
    },
    logout: async () => {
        return await request.post("auth/logout")
    },
    profile: async () => {
        return await request.get("auth/profile")
    }
}