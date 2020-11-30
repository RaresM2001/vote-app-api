const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        minlength: 8
    }
})

adminSchema.methods.hashPassword = function() {
    const saltRounds = 10;
    return new Promise((resolve, reject) => {
        bcrypt.hash(this.password, saltRounds, (error, hash) => {
            if(error) reject(error.message);
            this.password = hash;
            resolve();
        })
    }) 
}

adminSchema.methods.matchPassword = function(password) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, this.password, function(error, result) {
            if(error) reject(error.message)
            resolve(result);
        })
    })
}

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;