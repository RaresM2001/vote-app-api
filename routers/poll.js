const express = require('express');
const router  = express.Router();
const handler = require('../handlers/poll');
const middleware = require('../middleware/auth');

router.post('/', handler.addPoll);
router.get('/:id', handler.getPolls);
router.get('/', handler.getAllPolls);
router.get('/count/:id', handler.getPollCount);
router.get('/poll/:id', handler.getPoll);
router.post('/vote/:pollId/:type', handler.vote);
router.post('/send_message', handler.sendMessage);
router.post('/update/:id', handler.updatePoll);

module.exports = router;