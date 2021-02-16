const apiKey = process.env.MAILGUN_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const constants = require('../utils/constants');


const mailgun = require('mailgun-js')({
    apiKey,
    domain
});

const sendMail = async (message, to, tradeUnion) => {
    let data = {
        from: `${tradeUnion} <no-reply@mrv-it.com>`,
        to: to,
        subject: "Mesaj",
        html: constants.htmlMailTemplate(message, tradeUnion)
    }
    await mailgun.messages().send(data, (error, body) => {
        if (error) {
            console.log("Error", error)
        }
        console.log(body);
        return true;
    })
}

const sendCode = async (to, tradeUnion) => {
    let data = {
        from: `${tradeUnion} <no-reply@mrv-it.com>`,
        to: to,
        subject: "Cod Acces Vot",
        html: constants.htmlAccessCodeTemplate(tradeUnion)
    }

    mailgun.messages().send(data, (error, body) => {
        if (error) {
            console.log("Error", error)
        }

        if (body) {
            console.log('message was sent', body);
        }
    });

}

const createMailingList = async (name) => {
    let result = await mailgun.post('/lists', {
        address: `members_${name}@${domain}`,
        description: 'Members for vote application.'
    }, function (error, body) {
        if (error) return false;
        return true;
    });
    return result;
}

const addMemberToMailingList = async (name, memberData) => {
    let list = mailgun.lists(`members_${name}@${domain}`);
    let member = {
        name: memberData.firstName + " " + memberData.lastName,
        subscribed: true,
        address: memberData.email,
        vars: {code: memberData.code }
    }

    list.members().create(member, function (error, data) {
        if (error) return false;
    });
    return true;
}

module.exports = {
    sendMail,
    sendCode,
    createMailingList,
    addMemberToMailingList
}