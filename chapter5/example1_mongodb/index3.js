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

        db.col1.find({username: 'amitupadhyay'}, function (err, userArray) {// userArray is always an array even if there is only one document which matches in collection
            if (err)
                throw err;
            console.log('find query');
            console.log(userArray);
            console.log('----------------------');
        });
    });
});
