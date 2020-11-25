const authService = require('../services/auth.js');
const jwt = require('../utils/jwt')
const constants = require('../utils/constants')

const createAdmin = async (request, response) => {
    let data = request.body;
    try {
        let admin = await authService.createAdmin(data);
        console.log(admin);
        response.status(200).send(admin)
    } catch (error) {
        console.log(error);
        response.status(500).send(error.message);
    }
}

const login = async (request, response) => {
    let credentials = request.body;

    let admin = await authService.findAdminByUsername(credentials.username);
    if (!admin) return response.send({ success: false, incorrectUsername: true });

    try {
        let match = await admin.matchPassword(credentials.password);
        if (match) {
            let token = jwt.generateToken({
                id: admin._id,
                email: admin.email,
                firstName: admin.firstName,
                lastName: admin.lastName
            });

            response.cookie('access_token', token, {
                maxAge: constants.DAY
            });
            response.status(200).send({ success: true, adminInfo: {id: admin._id, firstName: admin.firstName, lastName: admin.lastName} })
        } else {
            response.status(200).send({success: false, incorrectPassword: true})
        }
    } catch (error) {
        console.log(error.message)
        response.status(200).send({success: false})
    }
}

const verifyToken = async (request, response) => {
    if (request.cookies.access_token == undefined)
        return response.status(401).send({ success: false })
    try {
        let decodedToken = await jwt.verifyToken(request.cookies.access_token);
        console.log(decodedToken);
        response.status(200).send({ success: true, decodedToken })
    } catch (error) {
        response.status(401).send({ success: false })
    }
}

module.exports = {
    createAdmin,
    login,
    verifyToken
}