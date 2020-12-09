const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://modure-rares-dev:<goldenLife7373>@voteapp.kux2v.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => {
        console.log('Connected to database!')
    }
);

module.exports = { mongoose };
