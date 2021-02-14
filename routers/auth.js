const express = require('express');
const router = express.Router();
const authHandler = require('../handlers/auth.js');

router.post('/admins', authHandler.createAdmin);
router.post('/login', authHandler.login);
router.post('/verify_token', authHandler.verifyToken);
router.post('/logout', authHandler.logout);

module.exports = router;