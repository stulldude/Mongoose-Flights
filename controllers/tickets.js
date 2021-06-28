const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    let flightId = req.params.id;
    console.log('1' + flightId);
    res.render('tickets/new', {title: 'Add Ticket', flightId})
}

function create(req, res) {
    req.body.flight = req.params.id;
    let ticket = new Ticket(req.body);
    ticket.save(function(err) {
        if (err) return;
        res.redirect(`/flights/${req.params.id}`)
    });
}