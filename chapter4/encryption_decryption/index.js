var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask()
{
    rl.question('Enter a password must be greater than 5 digits ', function(data) {
        if (data.length < 6)
        {
            console.log('Invalid password, kindly enter again.');
            while (data.length < 6)
                ask();
        }
        rl.close();
    });

}
ask();
function makePassword32Bytes(text)
{

}
