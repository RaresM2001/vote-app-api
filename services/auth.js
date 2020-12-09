const Admin = require('../models/admin');

const createAdmin = async (data) => {
    let admin = new Admin({...data});
    await admin.hashPassword(); 
    return admin.save();
}

const findAdminByEmail = async (email) => {
    let admin = await Admin.findOne({email});
    return admin;
}

module.exports = {
    createAdmin,
    findAdminByEmail
}