const Admin = require('../models/admin');

const createAdmin = async (data) => {
    let admin = new Admin({...data});
    await admin.hashPassword(); 
    try {
        return admin.save();
    } catch (error) {
        console.log(error);
    }
}

const getAdmins = async () => {
    let admins = await Admin.find({});
    return admins;
}

const findAdminByEmail = async (email) => {
    let admin = await Admin.findOne({email});
    return admin;
}

module.exports = {
    createAdmin,
    findAdminByEmail,
    getAdmins
}