const express = require('express');
const router = express.Router();
const handler = require('../handlers/mailgun');

router.post('/create_list', handler.createMailingList);
router.post('/add_member/:list', handler.addMemberToList);
router.post('/send_mail/', handler.sendMail);


module.exports = router;