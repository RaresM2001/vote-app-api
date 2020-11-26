const service = require('../services/member');

const addMember = async (request, response) => {
    let memberInfo = request.body;
    let member = await service.addMember(memberInfo);
    if(member) response.status(200).send({success: true, member})
    else response.status(200).send({success: false})
}

const getMembers = async (request, response) => {
    let members = await service.getMembers();
    if(members) response.status(200).send({success: true, members})
    else response.status(200).send({success: false})
}

const getMember = async (request, response) => {
    let id = request.params.id;
    let member = await service.getMemberById(id);
    if(member) response.status(200).send({success: true, member});
    else response.status(200).send({success: false});
}

const deleteMember = async (request, response) => {
    let id = request.params.id;
    let deletedStatus = await service.deleteMember(id);
    if(deletedStatus.count != 0) response.status(200).send({success: true})
    else response.status(200).send({success: false})
}

module.exports = {
    addMember,
    deleteMember,
    getMembers,
    getMember
}