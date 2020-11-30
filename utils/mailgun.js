const apiKey = process.env.MAILGUN_KEY;
const domain = process.env.MAILGUN_DOMAIN;

const mailgun = require('mailgun-js')({
    apiKey,
    domain
});

const sendMail = async (data) => {
    await mailgun.messages().send(data, (error, body) => {
        if (!error && body) return true;
        else return false;
    })
}

const createMailingList = async (name) => {
    let result = await mailgun.post('/lists', { 
        address: `members_${name}@${domain}`, 
        description: 'Members for vote application.' 
    }, function (error, body) {
        if(error) return false;
    });
    return result;
}

const addMemberToMailingList = async (name, memberData) => {
    let list = mailgun.lists(`members_${name}@${domain}`);

    let member = {
        name: memberData.firstName + " " + memberData.lastName,
        subscribed: true,
        address: memberData.email
    }

    list.members().create(member, function(error, data) {
        if(error) return false;
    });
    return true;
}


module.exports = {
    sendMail,
    createMailingList,
    addMemberToMailingList
}