var crypto = require('crypto');

var IV_LENGTH = 16;

function encrypt(text, key) {

  var iv = crypto.randomBytes(IV_LENGTH);
  var cipher = crypto.createCipheriv('aes-256-cbc', new Buffer(key), iv);
  var encrypted = cipher.update(text);

  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(text, key) {
  var textParts = text.split(':');
  var iv = new Buffer(textParts.shift(), 'hex');
  var encryptedText = new Buffer(textParts.join(':'), 'hex');
  var decipher = crypto.createDecipheriv('aes-256-cbc', new Buffer(key), iv);
  var decrypted = decipher.update(encryptedText);

  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
}


module.exports = { decrypt, encrypt };
