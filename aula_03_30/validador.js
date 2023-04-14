import jwt from 'jsonwebtoken';
const SECRET = "f5b99242-6504-4ca3-90f2"

function verificaJWT( req, res, next) {
    const token = req.headers["x-access-token"];
    jwt.verify(token, SECRET, (error, decoder ) => {
        if(error){
            console.log("ocorreu um erro no token", token);
            res.status(401).end();
        } else {
            next();
        }
    })
}

export default verificaJWT;