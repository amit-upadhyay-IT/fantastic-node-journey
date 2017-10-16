## MongoDB

Here I am not going to write about deep concepts of MongoDB, rather I would just write thing which are enough to work with MongoDB inside our node application.

MongoDB runs as a service on your machine. The way you start this service is by running 'mongod' command after you install MongoDB. The easiest way to work with MongoDB is using 'Mongo Shell', to open mongo shell you can write command 'mongo'. When you enter this command you get into REPL of MongoDB.

Simple commands:

> show databases

Shows you the databases.

> use db_name;

Goes into the db_name database.

> show collection

Shows a list of collection present in that particular database.

> db.collection_name.find();

If I call find() method without any argument it returns all the objects in the collection.
It's a simple query to find all things inside your collection. You can pass in a query parameter as a key value pair like:

`db.collection_name.find({name:"Amit"})`

> db.collection_name.insert({name:"Amit Upadhyay"});

To save an object into the database.

> db.createCollection('CollectionName');

Create a collection with name 'CollectionName'.

> db.collection_name.remove({name:'Amit Upadhyay'});

Removed all those records which have name as Amit Upadhyay from the mongodb collection. So to delete everything from the database, you just need to pass empty object as argument to remove() function 

eg:

`db.collection_name.remove({})`

------------------------------

**NoSQL  SQL**

Collection          Table
Document            Record

------------------

Every document is identified by a unique id provided by MongoDB.

NOTE: The data which it takes to save a record and the data which it prints out is all in JSON format.

The first thing which you can do is, create a project where you can talk to MongoDB from within our local application (i.e. using a programming language and interacting with MongoDB).
