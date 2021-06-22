const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    index
}

function newFlight(req, res) {
    res.render('flights/new', {title: 'Add Movie'})
}

function index(req, res) {
    Flight.findById(req.params.id, function(err, movies) {
        res.render('flights/index', { movies })
    });
}