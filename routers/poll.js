const express = require('express');
const router  = express.Router();
const handler = require('../handlers/poll');

router.post('/', handler.addPoll);
router.post('/update/:id', handler.updatePoll);
router.get('/:id', handler.getPolls);
router.get('/count/:id', handler.getPollCount);
router.get('/poll/:id', handler.getPoll);
router.post('/vote/:pollId/:type', handler.vote);
router.post('/send_message', handler.sendMessage);

module.exports = router;