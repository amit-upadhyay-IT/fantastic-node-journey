
var fs = require('fs');
fs.readFile('./package.json', 'UTF-8', function(err, data){
    if (err) throw err;
    console.log(data);
});

