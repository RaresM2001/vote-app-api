const express = require('express');
const router = express.Router();
const handler = require('../handlers/auth.js');

router.post('/admins', handler.createAdmin);
router.post('/login', handler.login);
router.post('/verify_token', handler.verifyToken);
router.post('/logout', handler.logout);
router.get('/admins', handler.getAdmins);

module.exports = router;