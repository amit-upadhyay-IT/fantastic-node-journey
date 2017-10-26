var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/amitupadhyay');// this is gonna connect to given instance of mongodb

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
    // yay!, we are now successfully connected to mongodb, so we can do all the initialization stuffs here.

    console.log('Successfully connected to MongoDB');
});


// creating a new schema
var kittySchema = mongoose.Schema({
    name: String// in this example I had only one property in this schema but we can have more for some other examples.
});

// using the schema above we need to create the model
var Kitten = mongoose.model('Kitten', kittySchema); // the second arg is the schema name.

// now we create a new cat (a document in mongodb)
var silence = new Kitten({name: 'Silence'});

// this save method is going to save the data in the database.
silence.save(function (err) {
    if (err)
        console.log(err);
    console.log('meow');
});
