var inp_password = process.argv.slice(2)[0];
if (inp_password == undefined || inp_password.length < 6)
{
    console.log('Invalid password, it must be greater than 5 letters with no white space');
    console.log('Restart program and try again');
    process.exit(1);
}

var makepassword32bytes = require('./modules/makepassword32bytes.js');
var _32bytePassword = makepassword32bytes(inp_password);

var encdec = require('./modules/encdec.js');

var encMessage = encdec.encrypt('Hello world', _32bytePassword);

var decMessage = encdec.decrypt(encMessage, _32bytePassword);

console.log('Encrypted Message ', encMessage);
console.log('Decrypted Message ', decMessage);
