const Poll = require('../models/poll');
const memberService = require('./member');

const addPoll = async (data) => {
    let poll = new Poll({...data});
    await poll.save();
    return poll;
}

const getPollById = async (id) => {
    let poll = await Poll.findById(id);
    return poll;
}

const getPolls = async () => {
    let polls = await Poll.find({});
    return polls;
}

const getPollCount = async () => {
    let count = await Poll.countDocuments({});
    return count;
}

const voteYesOrNo = async (vote, memberId, pollId) => {
    let poll = await getPollById(pollId);
    let member = await memberService.getMemberById(memberId);
    
    if(!member || !poll) return false;

    poll.yesOrNoAnswers.push({memberId: member._id, vote});
    await poll.save();
    return poll;
}

const voteOption = async (index, memberId, pollId) => {
    let poll = await getPollById(pollId);
    let member = await memberService.getMemberById(memberId);

    if(!member || !poll) return false;

    poll.optionAnswers.push({memberId: memberId, voteOption: index});
    await poll.save();
    return poll;
}

module.exports = {
    addPoll,
    getPolls,
    voteOption,
    voteYesOrNo,
    getPollById,
    getPollCount
}