const Ticket = require('../models/ticket');
const Flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    let flightId = req.params.id
    res.render('tickets/new', {title: 'Add Ticket', flightId})
}

function create(req, res) {
    let ticket = new Ticket(req.body); 
    console.log(req.params.id);
    Flight.findById(req.params.id, function(err, flight) {
        ticket.flight = flight;
    })
    console.log(ticket);
    Ticket.push(ticket);
    res.redirect(`/flights/${req.params.id}`)
}