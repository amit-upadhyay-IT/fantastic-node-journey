## Streams

A stream is an abstract interface for working with streaming data in Node.js. Streams are objects that let you read data from a source or write data to a destination in continuous fashion.

A **stream** can be:

- > Readable: used for read operation.
- > Writable: used for write operation.
- > Duplex: can be used for both read and write operation.
- > Transform: A type of duplex stream where the output is computed based on input


All Streams are instances of EventEmitter, but also have other methods and properties depending on whether they are Readable, Writable, Duplex or Transform. This means: Streams emit "events" and "data" along with some of those events. Some of the commonly used events are:


- > readable: emitted when data is available to read.
- > data: event is fired when there is data is available to read. Attaching a data listener (if you have not called pause() somewhere explicitly), will switch the readable stream to flowing mode and pass data as soon as it is available. The Data arguments are either of type Buffer or String.
- > end: event is fired when there is no more data to read.
- > error: event is fired when there is any error receiving or writing data.
- > finish: fired when all the data has been flushed to underlying system.
- > close: emitted when the underlying resource has been closed

Eg:
```js
var readable = getSomeReadableStream();

readable.on('data', function(chunk) {
	console.log(chunk);
});


**Readable Streams** are abstraction from a source of data to read from. That is: data flows out from Readable Stream. A Readable Stream will not start emitting data until you have indicated that you are ready to receive it.

Two modes:
- flowing: data is read form the source and provided to your program as soon as possible.
- paused: You must explicitly call read() function to read chunk of data from source.


You can switch to following mode:
>> Listening to the 'data' event.
>> Calling resume()
>> Using pipe()

We can switch to pause mode by:
>> if pipe is not used them, calling pause()
>> if pipe is used then remove all data event handlers and removing all pipe destinations by using unpipe()


