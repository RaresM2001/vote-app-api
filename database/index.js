const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://modure-rares-dev:<${process.env.atlasPassword}>@voteapp.kux2v.mongodb.net/<${process.env.atlasDbName}>?retryWrites=true&w=majority`,
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
