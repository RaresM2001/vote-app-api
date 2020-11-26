const express = require('express');
const router  = express.Router();
const handler = require('../handlers/poll');

router.post('/', handler.addPoll);
router.get('/:id', handler.getPoll);
router.post('/vote/:pollId/:type', handler.vote)

module.exports = router;