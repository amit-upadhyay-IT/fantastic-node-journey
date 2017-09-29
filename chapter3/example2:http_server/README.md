## HTTP server

'http' is a core module of nodejs. It has `createServer` method which is asynchronous. It takes a callback function which has a request and response object (typically with any http server).

Eg:

	var http = require('http'),
    	port = 1234;

	var server = http.createServer(function(request, response) {
	    response.writeHeader(200, 
			{"Content-Type": "text/plain"}
		);
	    response.write("Hello HTTP!");
	    response.end();
	});

	server.listen(port);

Once we get the request we write header to the response, then write some message and at the end we end it.

Try to see what all things request object contains.

### Do you know Nodemon?

To get the new changes reflected we need to run the node app again, nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.

It gets installed globally.

	npm install -g nodemon

Now, to run your application, instead of doing `node index.js`, we are going to invoke it using nodemon. Nodemon is internally going to create a new thread or process and then that is going to launch node for you, so if your application is changed or any file changes happen, it restarts the server.
