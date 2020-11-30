const express = require('express');
const router = express.Router();
const handler = require('../handlers/member');

router.post('/', handler.addMember);
router.get('/:id', handler.getMembers);
router.get('/count', handler.getMemberCount);
router.get('/:id', handler.getMemberById);
router.get('/by_email/:email', handler.getMemberByEmail);
router.delete('/:id', handler.deleteMember);

module.exports = router;