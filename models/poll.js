const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    question: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    closed: {
        type: Boolean,
        required: true
    },
    yesOrNoAnswers: {
        type: Array
    },
    options: {
        type: Array
    },
    optionAnswers: {
        type: Array
    },
    adminId: {
        type: String,
        required: true
    }
})

const Poll = mongoose.model('Poll', pollSchema);
module.exports = Poll;