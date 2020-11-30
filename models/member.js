const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    CNP: {
        type: String,
        required: true,
        unique: true
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
    }
})

const Member = mongoose.model('Member', memberSchema);
module.exports = Member;