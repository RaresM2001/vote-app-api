const service = require('../services/poll');
const mailgun = require('../utils/mailgun');

const addPoll = async (request, response) => {
    let data = request.body;
    let poll = await service.addPoll(data);
    if(poll) response.status(200).send({success: true, poll});
    else response.status(200).send({success: false});
}

const getPoll = async (request, response) => {
    let id = request.params.id;
    let poll = await service.getPollById(id);
    if(poll) response.status(200).send({success: true, poll});
    else response.status(200).send({success: false});
}

const getPolls = async (request, response) => {
    let id = request.params.id;
    let polls = await service.getPolls(id);
    if(polls) response.status(200).send({success: true, polls});
    else response.status(200).send({success: false});
}

const getAllPolls = async (request, response) => {
    let polls = await service.getAllPolls();
    if(polls) response.status(200).send({success: true, polls});
    else response.status(200).send({success: false});
}

const getPollCount = async (request, response) => {
    let id = request.params.id;
    let count = await service.getPollCount(id);
    if(count != undefined) response.status(200).send({success: true, count});
    else response.status(200).send({success: false});
}

const vote = async (request, response) => {
    let type = request.params.type;
    let pollId = request.params.pollId;
    let data = request.body;
    let vote = data.vote;
    let email = request.body.email;

    if(type === 'yesorno') {
        let result = await service.voteYesOrNo(vote, email, pollId);
        if(result != false || result != undefined) response.status(200).send({success: true});
        else response.status(200).send({success: false});
    } else if(type === 'multiple') {
        let result = await service.voteOption(vote, email, pollId);
        if(result != false) response.status(200).send({success: true});
        else response.status(200).send({success: false});
    }
}

const sendMessage = async (request, response) => {
    let message = request.body.message;
    let mailingList = request.body.mailingList;
    let res = await mailgun.sendMail(message, mailingList);
    console.log(result);
}

const updatePoll = async (request, response) => {
    let id = request.params.id;
    let result = await service.updatePoll(id);
    if(result) response.status(200).send({success: true})
    else response.status(200).send({success: false})
}

module.exports = {
    addPoll,
    vote,
    getPoll,
    getPolls,
    getPollCount,
    sendMessage,
    getAllPolls,
    updatePoll
}