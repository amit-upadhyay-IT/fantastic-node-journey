## Using formidable module

A Node.js module for parsing form data, especially file uploads. To know more visit [here](https://github.com/felixge/node-formidable). The example in index.js is taken from the `node-formidable` github repo.

If you run `index.js`, you will see something like this:

	received upload:

	{ fields: { title: '' },
	  files: 
	   { upload: 
	      File {
		domain: null,
		_events: {},
		_eventsCount: 0,
		_maxListeners: undefined,
		size: 232,
		path: '/tmp/upload_315cc8f237df0ed87a40aad07da9489d',
		name: 'example.cpp',
		type: 'text/x-c++src',
		hash: null,
		lastModifiedDate: 2017-09-25T19:09:31.511Z,
		_writeStream: [Object] } } }


As you can see, how simple it gets handeling file uploads.
