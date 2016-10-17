var os = require('os');

console.time("Details");

console.log(os.type());

console.log(os.platform());

console.log(os.arch());

console.timeEnd("Details");
