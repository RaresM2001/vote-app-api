const jwt = require('../utils/jwt');

const checkAccessToken = async (request, response, next) => {
    let token = request.cookies.access_token;
    if(token == undefined) return response.status(401).send();

    try {
        let decoded = await jwt.verifyToken(token);
        if(decoded != undefined) next();
        else response.status(401).send();
    } catch (error) {
        console.log(error);
        response.status(401).send();
    }
}

module.exports = {
    checkAccessToken,
}
