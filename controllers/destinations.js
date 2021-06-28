const Flight = require('../models/flight');
const { render } = require('../server');

module.exports = {
    create
}

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        flight.destinations.push(req.body);
        flight.save(function(err) {
            if (err) return;
            res.redirect('/flights')
        })
    })
}
