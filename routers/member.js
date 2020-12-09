const express = require('express');
const router = express.Router();
const handler = require('../handlers/member');
const util = require('../utils/jsonToDb');

router.post('/', handler.addMember);
router.post('/add_members', handler.addMembers)
router.get('/:id', handler.getMembers);
router.get('/count', handler.getMemberCount);
router.get('/:id', handler.getMemberById);
router.get('/by_email/:email', handler.getMemberByEmail);
router.delete('/:id', handler.deleteMember);

module.exports = router;