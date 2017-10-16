var mongojs = require('mongojs');
var db = mongojs('amitupadhyay', ['col1']);// analogous to ('database name', ['collection1', 'collection2'...]);

var user = {
    username : 'amitupadhyay',
    email : 'amitupadhyayemail@gmail.com',
    password : 'testpassword'
};

db.col1.remove({}, function (err, response) {// empty object says I need to remove all documents in collection
    if (err)
        throw err;
    console.log(response);

    // after the remove is successfully done,
    // this is also called as callback hell
    db.col1.save(user, function (err, data) {
        if (err)
            throw err;
        else
            console.log('Saved successfully', data);
    });
});
