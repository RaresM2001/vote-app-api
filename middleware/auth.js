const jwt = require('../utils/jwt');

const checkCookie = async (request, response, next) => {
  if (request.cookies.access_token == undefined) {
    console.log('We dont have a login cookie here!', request);
    return response.status(401).send({ success: false })
  }
  try {
    let decodedToken = await jwt.verifyToken(request.cookies.access_token);
    if(decodedToken) next();
  } catch (error) {
    console.log(error);
    response.status(401).send({ success: false })
  }
}

module.exports = {
  checkCookie
}