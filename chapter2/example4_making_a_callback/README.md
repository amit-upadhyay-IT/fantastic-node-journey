## Make your own api with a callback (i.e. async)

By now you must have thought of writing your own custom asynchronous function. Even I was very curious to make a custom asnyc function.

JavaScript itself is synchronous and single-threaded. You cannot write an asynchronous function; plain JS has no timing API. There will be no side-effects from parallel threads. What you can do is use some APIs provided by your environment (Node.js, Webbrowser) that allow you to schedule asynchronous tasks - using timeouts, ajax, FileAPI, requestAnimationFrame, nextTick, WebWorkers, DOM events, whatever.


