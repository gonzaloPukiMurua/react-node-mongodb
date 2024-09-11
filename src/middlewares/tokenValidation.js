import { verifyAccesToken } from "../lib/jwt.js";

export const authorization = (req, res, next) => {
    const {token} = req.cookies;
    if(!token) return res.status(401).json({message: "No token. Denied!"});
    verifyAccesToken(token, (err, user) => {  
        if(err) return res.status(400).json({message: "Invalid token!"});
        req.user = user;
        next();
        }
    );
}