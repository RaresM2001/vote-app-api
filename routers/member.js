const express = require('express');
const router = express.Router();
const handler = require('../handlers/member');
const middleware = require('../middleware/auth');

router.post('/', middleware.checkAccessToken, handler.addMember);
router.get('/', handler.getMembers);
router.get('/count', handler.getMemberCount);
router.get('/:id', handler.getMemberById);
router.get('/by_email/:email', handler.getMemberByEmail);
router.delete('/:id', handler.deleteMember);

module.exports = router;