const mongoose = require('mongoose');

mongoose.connect(`mongodb://modure-rares-dev:goldenLife7373@cluster0-shard-00-00.kux2v.mongodb.net:27017,cluster0-shard-00-01.kux2v.mongodb.net:27017,cluster0-shard-00-02.kux2v.mongodb.net:27017/votedb?ssl=true&replicaSet=atlas-ze8e8r-shard-0&authSource=admin&retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },
    (error) => {
        if(error) console.log(error)
        console.log('Connected to database!')
    }
);

module.exports = { mongoose };
