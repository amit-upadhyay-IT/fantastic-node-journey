var express = require('express');
var bodyparser = require('body-parser');
var session = require('express-session');

var handlers = require('./routes/routes.js');
var app = express();

app.use(express.static(_dirname + '/public'));

// body-parser
app.use(bodyparser());

// session handling
app.use(session (
    {
        secret:"secret",
        resave:true,
        saveUninitialized:true
    }
));

/*
 * Note the object we are passing in the session constructor. Now our application is ready for session handling purpose.
 * secret: it is used to keep some secret value which is only known to the developer (it might be coming from the db or any reserve system). Basically this doesn't allow stealing of session.
 * resave: even if there is no change in the req, res value but still if we want to save it we make resave: true. It makes sure that the session always have correct data.
 * saveUninitialized; Actually I don't know why is it used. But for now I can tell that it accepts true or false.
 * */


app.get('');
