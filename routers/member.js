const express = require('express');
const router = express.Router();
const handler = require('../handlers/member');
const middleware = require('../middleware/auth');

router.get('/code/:code', handler.findMemberByAccessCode);
router.post('/', middleware.checkCookie, handler.addMember);
router.post('/add_members', handler.addMembers)
router.get('/:id', handler.getMembers);
router.get('/count/:id', middleware.checkCookie, handler.getMemberCount);
router.get('/member/:id', middleware.checkCookie, handler.getMemberById);
router.get('/by_email/:email', middleware.checkCookie, handler.getMemberByEmail);
router.delete('/:id', middleware.checkCookie, handler.deleteMember);


module.exports = router;