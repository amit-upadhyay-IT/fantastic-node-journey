/*
 * removing, inserting, querying and updating
 * */

var mongojs = require('mongojs');
var db = mongojs('amitupadhyay', ['col1']); // analogous to ('database name', ['collection1', 'collection2', ...])

var users = [
    {
        username : 'amitupadhyay',
        email : 'amitupadhyayemail@gmail.com',
        password : 'testpassword'
    },
    {
        username : 'developerupadhyay',
        email : 'developerupadhyay@gmail.com',
        password : 'devPassword'
    }
];

db.col1.remove({}, function (err, data) {
    if (err)
        throw err;
    console.log('Removed\n', data);
    console.log('----------------------');

    db.col1.save(users, function (err, data) {
        if (err)
            throw err;
        console.log('Inserted\n', data);
        console.log('----------------------');

        // if we use just find() function, then the data in the callback is always an array of matched documents in the collection and it doesn't matter on the number of matches.
        // if we use findOne(), the data (2nd argument) in the callback is not an array but just one JSON object.
        db.col1.findOne({username: 'amitupadhyay'}, function (err, userOne) {
            if (err)
                throw err;
            console.log('find query');
            console.log(userOne);
            console.log('----------------------');

            db.col1.update(
                {
                    username : 'amitupadhyay'
                },
                {
                    password : 'changedPassword'
                }, function (err, respon) {
                    if (err)
                        throw err;
                    console.log('Update status ', respon);
                    console.log('----------------------------');
                });
        });
    });
});
