const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightsSchema = new Schema({
    airline: { type: String, enum: ['Southwest', 'United', 'American'] },
    airport: { type:  String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default: 'DEN' },
    flightNo: { type: Number, min: 10, max: 9999},
    departs: { type: Date, default: function() {
        return new Date().getFullYear() + 1;
    }},
    destinations: [destinationSchema]
});

const destinationSchema = new Schema({
    airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    arrival: {type: Date}
})

module.exports = mongoose.model('Flight', flightsSchema);