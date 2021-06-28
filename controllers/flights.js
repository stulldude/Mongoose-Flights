const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    index,
    create,
    show,
}

function newFlight(req, res) {
    res.render('flights/new', {title: 'Add Flight'})
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights', {title: 'All Flights', flights })
    });
}

function create(req, res) {
    console.log(req.body);
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return;
        res.redirect('/flights');
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', {title: `Flight Number: ${flight.flightNo}`, flight, tickets});
        });
    });
}