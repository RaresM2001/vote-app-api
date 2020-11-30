const apiKey = process.env.MAILGUN_KEY;
const domain = process.env.MAILGUN_DOMAIN;

const mailgun = require('mailgun-js')({
    apiKey,
    domain
});

const sendMail = async (data) => {
    let result = await mailgun.messages().send(data, (error, body) => {
        if (!error && body) return true;
        else return false;
    })
    console.log('Mail result is ' + result);
}

const createMailingList = async (adminId) => {
    let result = await mailgun.post('/lists', { 
        address: `members@${domain}`, 
        description: 'Members for vote application.' 
    }, function (error, body) {
        if(error) return false;
    });
    return result;
}

const addMemberToMailingList = async (listName) => {
    let list = mailgun.lists(`${listName}@${domain}`);
    let member = {
        name: "Modure Rares",
        subscribed: true,
        address: "m.rares956@yahoo.com"
    }

    let result = await list.members().create(member, function(error, data) {
        if(error) return false;
    })
    return result;
}

module.exports = {
    sendMail,
    createMailingList,
    addMemberToMailingList
}