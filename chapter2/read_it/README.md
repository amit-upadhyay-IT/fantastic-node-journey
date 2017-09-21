#### ever thought of using NPM as build tool?
We can use npm as a build tool, which I highly discourage doing unless and until we have a very small and isolated app. If you are going to use package.json or npm as a build tool, then number of options you are going to have is limited.
I would rather recommend using modules like Grunt, Gulp or Broccoli.

If you use NPM as build tool, you can make use of "npm start", "npm test", "npm stop", note that start, test, stop are part of script in package.json file
