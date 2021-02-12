const mongoose = require('mongoose');
const codeGenerator = require('../utils/accessCode.js');

const memberSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String, 
    },
    email: {
        type: String,
    },
    CNP: {
        type: String,
    },
    joinedIn: {
        type: String
    },
    adminId: {
        type: String,
        required: true,
    },
    address: {
        type: String
    },
    DGRFP: {
        type: String
    },
    code: {
        type: String,
        required: true
    }
});

memberSchema.methods.generateCode = function() {
    let code = codeGenerator.generateCode(5);
    this.code = code;
}

const Member = mongoose.model('Member', memberSchema);
module.exports = Member;