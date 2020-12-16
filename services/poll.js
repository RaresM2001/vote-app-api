const Poll = require('../models/poll');

const addPoll = async (data) => {
    let poll = new Poll({...data});
    await poll.save();
    return poll;
}

const getPollById = async (id) => {
    let poll = await Poll.findById(id);
    return poll;
}

const getPolls = async (id) => {
    let polls = await Poll.find({adminId: id});
    return polls;
}

const getAllPolls = async () => {
    let polls = await Poll.find({});
    return polls;
}

const getPollCount = async (id) => {
    let count = await Poll.countDocuments({adminId: id});
    return count;
}

const voteYesOrNo = async (vote, pollId) => {
    let poll = await getPollById(pollId);
    if(!poll) return false;

    poll.yesOrNoAnswers.push({vote});
    await poll.save();
    return poll;
}

const voteOption = async (index, pollId) => {
    let poll = await getPollById(pollId);
    if(!poll) return false;

    poll.optionAnswers.push({voteOption: index});
    await poll.save();
    return poll;
}

const updatePoll = async (pollId) => {
    let poll = await getPollById(pollId);
    // let member = await memberService.getMemberById(memberId);
    if(!poll) return false;
    poll.closed = true;
    let newPoll = await poll.save();
    return newPoll;
}

module.exports = {
    addPoll,
    getPolls,
    voteOption,
    voteYesOrNo,
    getPollById,
    getPollCount,
    getAllPolls,
    updatePoll
}