const express = require('express');
const router = express.Router();
const handler = require('../handlers/member');

router.post('/', handler.addMember);
router.get('/', handler.getMembers)
router.delete('/:id', handler.deleteMember)

module.exports = router;