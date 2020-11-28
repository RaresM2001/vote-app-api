const Member = require('../models/member');

const addMember = async (data) => {
    let member = new Member({...data});
    await member.save();
    return member;
}

const getMembers = async () => {
    let members = await Member.find({});
    return members;
}

const getMemberByEmail = async (email) => {
    let member = await Member.findOne({email});
    return member;
}

const getMemberById = async (id) => {
    let member = await Member.findById(id);
    console.log(member)
    return member;
}

const deleteMember = async (id) => {
    let deletedStatus = await Member.deleteOne({_id: id});
    return deletedStatus;
}

module.exports = {
    addMember,
    deleteMember,
    getMembers,
    getMemberById,
    getMemberByEmail
}