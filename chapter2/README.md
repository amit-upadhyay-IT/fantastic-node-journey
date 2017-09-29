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



## Tooling in nodejs

### ever thought of using NPM as build tool?
We can use npm as a build tool, which I highly discourage doing unless and until we have a very small and isolated app. If you are going to use package.json or npm as a build tool, then number of options you are going to have is limited.
I would rather recommend using modules like Grunt, Gulp or Broccoli.

If you use NPM as build tool, you can make use of "npm start", "npm test", "npm stop", note that start, test, stop are part of script in package.json file. If you want to use NPM as build tool then strengthen yourself [here](https://medium.com/javascript-training/introduction-to-using-npm-as-a-build-tool-b41076f488b0)

For nodejs we don't have an official IDE which creates the projects and file for you. Since you see the versatility of nodejs. So they have come up with a module "YEOMAN". It is "THE WEB'S SCAFFOLDING TOOL FOR MODERN WEBAPPS". Yo is the scaffolding tool engine which leverages 'bower' and 'grunt' to build the whole process. We can use the Yeoman generater for creating a node module. Yeoman setup is one time installation. For running Yeoman we would require three modules.

#### Use this command to install yeoman:

	npm install -g yo bower grunt-cli

Since it has -g flag, so it can be run from anywhere in the terminal. Remember for 'bower' to work you should have git installed on your machine. To know more about bower, visit [here](http://npmjs.com/package/bower). Bower and npmjs are both package managers. Bower offers a generic, unopinionated solution to the problem of front-end package management. We can also search for bower packages (like we do for npm). The difference between npm and bower is that npm hierarchical dependency manager. You can create your own module and publish it on bower. Remember bower is mainly for front development.

We want to create a nodejs module using Yeoman. For that just search 'node' at [Discovering generators](http://yeoman.io/generators/). The official generators are marked moustache. We have this project named [generator-node](https://github.com/yeoman/generator-node). Let's say we want to create a new node module and push it to the npm repository, for that reason we don't want to manually generate everything every single time. Here we are going to install generator-node. `generator-node` takes care of scaffolding the project for you on the fly.

#### Install generator-node:

	$ npm install --global generator-node

#### To use:

	$ yo node

Here we are done. Now bunch of question about the project would be asked. It creates the whole project structure for you. It generates README.md, package.json, index.js (all our business logic is going to be written here), etc.

## What is grunt?
Grunt is like Ant script, Maven, Gradle in java, i.e. build tool. In one word Grunt is basically automation. We will be writing a bunch of things in the grunt ecosystem to do automated process. Grunt is basically a configuration based tool where we specify what needs to be done. 
