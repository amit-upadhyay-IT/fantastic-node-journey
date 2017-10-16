var mongojs = require('mongojs');
var db = mongojs('amitupadhyay', ['col1']);// analogous to ('database name', ['collection1', 'collection2'...]);

var user = {
    username : 'amitupadhyay',
    email : 'amitupadhyayemail@gmail.com',
    password : 'testpassword'
};

function handleRemove(err, response)
{
    if (err)
        throw err;
    console.log(response);

    db.col1.save(u, handleSave);
}

function handleSave(err, u)
{
    if (err)
        throw err;
    console.log('Saved successfully', u);
}


db.col1.remove({}, handleRemove);// empty object means I want to remove all the documents in the collection

/*
 * A more cleaner code not involving callback hell
 * */
