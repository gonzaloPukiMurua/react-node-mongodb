import jwt from "jsonwebtoken";

export const createAccesToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
        payload,
        process.env.SECRET_KEY,
        {expiresIn: "1d"},
        (err, token) => {
            if(err)reject.err;
            resolve(token)
            }
        );
    });
}

export const verifyAccesToken = (token, callback) => {
    jwt.verify(token, process.env.SECRET_KEY, callback);
}