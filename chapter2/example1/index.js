// nodejs core module named - fs
// I highly recommend searching for node api <module_name>, and then reading about the apis being provided by that module at the node docs, there are example of almost all the apis you may ever want.

var fs = require('fs');
fs.readFile('./package.json', 'UTF-8', function(err, data){
    if (err) throw err;
    console.log(data);
});

/*
 * generally the last argument of any method in nodejs will consist of the callback
 * Also one more convention: if any callback is available there are always two argument or atleast one argument, where the first argument is always 'err'
 * if you in future are designing a node module by yourself, you should always keep this thing in mind that 0 to n-1 arguments in your functions should be the
 * options and the nth argument should be the callback function. And that callback function when you invoke it from your application should have the err as first argument.
 * */
