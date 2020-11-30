const service = require('../utils/mailgun');

const createMailingList = async (request, response) => {
    let result = await service.createMailingList();
    if(result != false && result.list != undefined) response.status(200).send({success: true});
    else response.status(200).send({success: false});
}

const addMemberToList = async (request, response) => {
    
    let result = await service.addMemberToMailingList(request.body.tradeUnion, request.body.member);
    if(result) response.status(200).send({success: true});
    else response.status(200).send({success: false}); 
}

const sendMail = async (request, response) => {
    let result = await service.sendMail(request.body);
}

module.exports = {
    createMailingList,
    addMemberToList,
    sendMail
}