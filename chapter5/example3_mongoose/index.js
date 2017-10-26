var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/amitupadhyay');// this is gonna connect to given instance of mongodb

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
    // yay!, we are now successfully connected to mongodb, so we can do all the initialization stuffs here.

    console.log('Successfully connected to MongoDB');
});

