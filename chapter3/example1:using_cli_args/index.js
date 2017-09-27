var checkpackage = require('../../../checkpackage/index.js');

// checkpackage = require('checkpackage');

var name = process.argv.slice(2)[0];

console.log('Searching ...')
if (name)
    checkpackage(name);
else
    console.log('Kindly enter an package name');
