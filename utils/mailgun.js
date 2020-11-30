const apiKey = process.env.MAILGUN_KEY;
const domain = process.env.MAILGUN_DOMAIN;

const mailgun = require('mailgun-js')({
    apiKey,
    domain
});

const sendMail = async (data) => {
    await mailgun.messages().send(data, (error, body) => {
        console.log(body)
        if (!error && body) return true;
        else return false;
    })
}

const createMailingList = async () => {
    let result = await mailgun.post('/lists', { 
        address: `members@${domain}`, 
        description: 'Members for vote application.' 
    }, function (error, body) {
        if(error) return false;
    });
    return result;
}

const addMemberToMailingList = async (listName, memberData) => {
    let list = mailgun.lists(`${listName}@${domain}`);

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