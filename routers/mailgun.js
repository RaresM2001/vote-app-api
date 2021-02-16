const express = require('express');
const router = express.Router();
const handler = require('../handlers/mailgun');

router.post('/create_list', handler.createMailingList);
router.post('/add_member/:list', handler.addMemberToList);
router.post('/send_mail/', handler.sendMail);
router.post('/send_code', handler.sendCode);


module.exports = router;