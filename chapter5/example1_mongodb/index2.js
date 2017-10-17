var mongojs = require('mongojs');
var db = mongojs('amitupadhyay', ['col1']);// analogous to ('database name', ['collection1', 'collection2'...]);

var user = [
    {
        username : 'amitupadhyay',
        email : 'amitupadhyayemail@gmail.com',
        password : 'testpassword'
    },
    {
        username: 'developerupadhyay',
        email : 'developerupadhyay@gmail.com',
        password : 'anotherpassword'
    }
];


db.col1.remove({}, function (err, response) { // empty object means I want to remove all the documents in the collection

    if (err)
        throw err;
    console.log(response);

    db.col1.save(user, function (err, u) {
        if (err)
            throw err;

        // once the user is saved I want to query that particular user;

        db.col1.find({}, function (err, users) {//I am gonna find everything so I pass an empty object
            if (err)
                throw err;
            console.log(users);
        });
    });
});

/*
 * The difference which you can see in index.js and this file is that, this time the data which you received is an array.
 * */
