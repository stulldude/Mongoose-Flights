var express = require('express');
var router = express.Router();
const ticketCtrl = require('../controllers/tickets')

router.get('/flights/:id/tickets/new', ticketCtrl.new);
router.post('/flights/:id/tickets', ticketCtrl.create);

module.exports = router;