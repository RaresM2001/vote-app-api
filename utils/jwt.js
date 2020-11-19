const jwt = require('jsonwebtoken');

const generateToken = (payload, expiresIn) => {
    let token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
    return token;
}

module.exports = {
    generateToken
}