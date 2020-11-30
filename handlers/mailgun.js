const service = require('../utils/mailgun');

const createMailingList = async (request, response) => {
    let result = await service.createMailingList();
    if(result != false && result.list != undefined) response.status(200).send({success: true});
    else response.status(200).send({success: false});
}

const addMemberToList = async (request, response) => {
    let list = request.params.list;
    let result = service.addMemberToMailingList(list);
    if(result != false && result.member) response.status(200).send({success: true});
    else response.status(200).send({success: false}); 
}

module.exports = {
    createMailingList,
    addMemberToList
}