var mongojs = require('mongojs');
var db = mongojs('amitupadhyay', ['col1']);// analogous to ('database name', ['collection1', 'collection2'...]);

var user = {
    username : 'amitupadhyay',
    email : 'amitupadhyayemail@gmail.com',
    password : 'testpassword'
};

db.col1.remove({}, function (err, response) {
    if (err)
        throw err;
    console.log(response);

    db.col1.save(user, function (err, data) {
        if (err)
            throw err;
        else
            console.log('Saved successfully', data);
    });
});
