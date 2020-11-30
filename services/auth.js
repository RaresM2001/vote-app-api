const Admin = require('../models/admin');

const createAdmin = async (data) => {
    let admin = new Admin({...data});
    await admin.hashPassword();
    return admin.save();
}

const findAdminByUsername = async (username) => {
    let admin = await Admin.findOne({username});
    return admin;
}

module.exports = {
    createAdmin,
    findAdminByUsername
}