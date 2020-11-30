const Member = require('../models/member');

const addMember = async (data) => {
    let member = new Member({...data});
    await member.save();
    return member;
}

const getMembers = async (id) => {
    let members = await Member.find({adminId: id});
    return members;
}

const getMemberCount = async (id) => {
    let count = await Member.countDocuments({adminId: id});
    return count;
}
    
const getMemberByEmail = async (email, id) => {
    let member = await Member.findOne({email: email, adminId: id});
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
    getMemberByEmail,
    getMemberCount
}