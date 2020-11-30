const service = require('../services/auth.js');
const jwt = require('../utils/jwt')
const constants = require('../utils/constants')
const mailgun = require('../utils/mailgun');

const createAdmin = async (request, response) => {
    let data = request.body;
    try {
        let admin = await service.createAdmin(data);
        if (admin) {
            mailgun.createMailingList(admin.tradeUnion);
            response.status(200).send(admin)
        }

    } catch (error) {
        response.status(500).send(error.message);
    }
}

const login = async (request, response) => {
    let credentials = request.body;

    let admin = await service.findAdminByEmail(credentials.email);
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
            response.status(200).send({ success: true, adminInfo: { id: admin._id, firstName: admin.firstName, lastName: admin.lastName, tradeUnion: admin.tradeUnion } })
        } else {
            response.status(200).send({ success: false, incorrectPassword: true })
        }
    } catch (error) {
        response.status(200).send({ success: false })
    }
}

const verifyToken = async (request, response) => {
    if (request.cookies.access_token == undefined)
        return response.status(401).send({ success: false })
    try {
        let decodedToken = await jwt.verifyToken(request.cookies.access_token);
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