import request from "./axios.js";

export const auth = {
    register: (user) => {
        request.post("/auth/singup", user)
    },
    login: (user) => {
        request.post("/auth/signin", user);
    },
    logout: () => {
        request.post("/auth/logout")
    },
    profile: () => {
        return request.get("/auth/profile")
    }
}