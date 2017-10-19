var mongojs = require('mongojs');
// when you are interacting with your local instance of mongodb all you needed is to provide is the database, (or entire address if it's on a remote location). You need to copy the connection string from the mlab account.
var db = mongojs('mongodb://adminamit:amit123@ds121955.mlab.com:21955/amitmongodb', ['users']);

var a = {
    username: 'amitupadhyayemail',
    email : 'amitupadhyayemail@gmail.com',
    password : 'test1'
}

var b = {
    username: 'developerupadhyay',
    email : 'developerupadhyay@gmail.com',
    password : 'test2'
}

var users = [a, b];

db.users.insert(users, function (err, docs) {
    console.log(err || docs);
});
