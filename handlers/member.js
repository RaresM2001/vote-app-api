const { response } = require('express');
const service = require('../services/member');

const addMember = async (request, response) => {
    let memberInfo = request.body;
    let adminId = request.body.adminId;

    let alreadyExists = await service.getMemberByEmail(memberInfo.email, adminId);
    if(alreadyExists) return response.status(200).send({success: false, duplicate: true});

    let member = await service.addMember(memberInfo);
    if (member) response.status(200).send({ success: true, member })
    else response.status(200).send({ success: false })
}

const getMemberByEmail = async (request, response) => {
    let email = request.params.email;
    let member = await service.getMemberByEmail(email);
    if(!member) response.status(200).send({success: false})
    else response.status(200).send({success: true, member});
}

const getMemberById = async (request, response) => {
    let id = request.params.id;
    let member = await service.getMemberById(id);
    if (member) response.status(200).send({ success: true, member });
    else response.status(200).send({ success: false });
}

const getMembers = async (request, response) => {
    let id = request.params.id;
    let members = await service.getMembers(id);
    if (members) response.status(200).send({ success: true, members })
    else response.status(200).send({ success: false })
}

const getMemberCount = async (request, response) => {
    let id = request.params.id;
    let count = await service.getMemberCount(id);
    if(count != undefined) response.status(200).send({success: true, count});
    else response.status(200).send({success: false});
}

const deleteMember = async (request, response) => {
    let id = request.params.id;
    let deletedStatus = await service.deleteMember(id);
    if (deletedStatus.count != 0) response.status(200).send({ success: true })
    else response.status(200).send({ success: false })
}

module.exports = {
    addMember,
    deleteMember,
    getMembers,
    getMemberById,
    getMemberByEmail,
    getMemberCount
}