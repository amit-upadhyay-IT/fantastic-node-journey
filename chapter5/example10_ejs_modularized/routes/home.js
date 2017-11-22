var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('home', {title:'iLoveMyCity', headline:'We believe that every city has something to say'});
});

module.exports = router;
