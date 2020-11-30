const jwt = require('jsonwebtoken');

const generateToken = (payload, expiresIn) => {
    let expirationTime = expiresIn || '24h';
    let token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: expirationTime });
    return token;
}

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, function (error, decoded) {
            if(error) reject(error.message);
            resolve(decoded);
        });
    })
}

module.exports = {
    generateToken,
    verifyToken
}