exports.loginPageHandler = function (req, res) {
    res.render('login.handlebars', {});
}

exports.logoutHandler = function (req, res) {
    req.session.destroy(); // destroys data saved in session object.

    res.render('login.handlebars', {LOGGEDIN:false});
}

exports.landingPageHandler = function (req, res) {
    req.session.loggedin = true;

    var person;

    if (req.session.userNmae) {
        console.log('User name already in session. It is ' + req.session.UserName);
        person = req.session.userName;
    }
    else
    {
        person = req.query.nm;
        req.session.userName = person;
        console.log('User name doesn\'t exists in session. Hence storing it in session store ' + person);
    }

    res.render('landingpage.handlebars', {
        welcomeMessage:person,
        LOGGEDIN:req.session.loggedin
        }
    );
}

exports.cityPageHandler = function (req, res) {
    var interestValue = req.body.interest; /*this is a post request thus I am using body instead of params*/
    var cityNameValue, taglineValue;

    console.log('received interestValue as ' + interestValue);
    var imageArray = [];

    if (interestValue === 'history')
    {
        cityNameValue = 'Rome';
        taglineValue = 'The city of earliest civilization';
        imageArray = [1, 2];
    }
    else if (interestValue === 'fashion')
    {
        cityNameValue = 'Pairs';
        taglineValue = 'The faishon capital of the world';
        imageArray = [1, 2, 3];
    }
    else if (interestValue = 'finance')
    {
        cityNameValue = 'Frankfurt';
        taglineValue = 'The business capital of Germany';
        imageArray = [1, 2, 3, 4, 5, 6];
    }

    res.render('city.handlebars', {
        cityName:cityNameValue,
        tagline:taglineValue,
        welcomeMessage:req.session.userName,
        imageArray:imageArray,
        LOGGEDIN:req.session.loggedin
        }
    );
}
