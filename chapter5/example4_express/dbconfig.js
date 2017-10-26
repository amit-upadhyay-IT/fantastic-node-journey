var mongojs = require('mongojs');
var db = mongojs('mongodb://adminamit:amit123@ds121955.mlab.com:21955/amitmongodb', ['users']);// connecting to cloud db to get the list of users

module.exports = db;
