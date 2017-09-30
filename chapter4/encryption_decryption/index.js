var inp_password = process.argv.slice(2)[0];
if (inp_password == undefined || inp_password.length < 6)
{
    console.log('Invalid password, it must be greater than 5 letters with no white space');
    console.log('Restart program and try again');
    process.exit(1);
}

console.log('User entered ', inp_password);

var makepassword32bytes = require('./modules/makepassword32bytes.js');
var _32bytePassword = makepassword32bytes(inp_password);

console.log('Converted Password ', _32bytePassword);


