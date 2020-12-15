const member = require('../services/member');
const service = require('../services/poll');

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
    let memberId = data.memberId;
    let vote = data.vote;

    if(type === 'yesorno') {
        let result = await service.voteYesOrNo(vote, pollId);
        if(result != false || result != undefined) response.status(200).send({success: true});
        else response.status(200).send({success: false});
    } else if(type === 'multiple') {
        let result = await service.voteOption(vote, pollId);
        if(result != false) response.status(200).send({success: true});
        else response.status(200).send({success: false});
    }
}

const updatePoll = async (request, response) => {
    let id = request.params.id;
    let res = await service.updatePoll(id);
    if(res) response.status(200).send({success: true});
    else response.status(200).send({success: false});
}

module.exports = {
    addPoll,
    vote,
    getPoll,
    getPolls,
    getPollCount,
    getAllPolls,
    updatePoll
}