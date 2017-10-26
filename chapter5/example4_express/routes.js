var mongojs = require('mongojs');
var db = mongojs('mongodb://adminamit:amit123@ds121955.mlab.com:21955/amitmongodb', ['users']);// connecting to cloud db to get the list of users

module.exports = function (app) {// this function takes app as its argument

    app.get('/', function (req, res) {
        res.send('You are at /');
    });

    app.get('/api/v1/users', function (req, res) {

        // here we are going to go to mongodb and whenever a user hits on /api/v1/users I am going to query the could interface and find all the records
        db.users.find({}, function (err, docs) {
            if (err)
            {
                res.status(500);
                res.send({
                    err: new Error(err)
                });
            }
            else
            {
                res.json (docs);
            }
        });
    });

    return app;
};
