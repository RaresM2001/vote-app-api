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
    yesOrNoAnswers: {
        type: Array
    },
    // only if the poll is a multiple answer poll
    options: {
        type: Array
    },
    optionAnswers: {
        type: Array
    }
})

const Poll = mongoose.model('Poll', pollSchema);
module.exports = Poll;