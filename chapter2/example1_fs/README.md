### nodejs core module named - fs

I highly recommend searching for node api <module_name>, and then reading about the apis being provided by that module at the node docs, there are example of almost all the apis you may ever want.

eg:

        var fs = require('fs');
        fs.readFile('./package.json', 'UTF-8', function(err, data){
            if (err) throw err;
            console.log(data);
        });
        
Generally the last argument of any method in nodejs will consist of the callback.
Also one more convention: if any callback is available there are always two argument or atleast one argument, where the first argument is always 'err'
if you in future are designing a node module by yourself, you should always keep this thing in mind that 0 to n-1 arguments in your functions should be the
options and the nth argument should be the callback function. And that callback function when you invoke it from your application should have the err as first argument.


If you don't pass 'UTF-8' as argument, then the output would still come and the buffer would get printed, but that buffer isn't readable. We want to print something written in english
for a computer that's UTF-8 encoded text. So we need to pass the second arg UTF-8.

##### Consider this example:

	var fs = require('fs');
	fs.readFile('./package.json', 'UTF-8', function(err, data){
	    if (err) throw err;
	    var myPackage = JSON.parse(data);// converted the string 'data' to json
	    console.log(myPackage.description);// name is an property in package.json
	});

	console.log('Another independent operation!');

The output is:

    Another independent operation!
    file reader app

This happens because the readFile being a blocking operation is pushed into the event queue/ callback queue, thus console.log(); gets executed first. Si this way the whole process is non-blocking.

##### Consider this:

	var contents = fs.readFileSync('./package.json', 'UTF-8');
	console.log(JSON.parse(contents).description);

	console.log('Another independent operation!');
Output:

	file reader app
	Another independent operation!

As from the output you can see there are no functions which are enqueued to the callback queue. So first the readFileSync (blocking code) gets executed. This is a traditional way of coding where we wait on all the IO operations.

##### NOTE: 
For a Async version we need to pass the callback function which is not same for Sync version.

Any IO operation related API method will have two flavours a) Async way b) Sync way.

