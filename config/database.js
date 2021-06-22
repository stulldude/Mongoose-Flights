const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost/flights',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    }
);


