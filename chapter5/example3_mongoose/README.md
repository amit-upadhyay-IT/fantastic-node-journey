# Mongoose

People are so much into working with RDBMS, so we end up converting a NoSQL database into a SQL structure.

Consider an example where you want to build database for Employee,

So you will have these many tables associated with your Employees table
Employees
    PersonalInfo
    AcademicInfo
    PayScale
    JobDesc
    DailyProjectTask

So, we have these bunch of tables associated with the Employees table where everything is related with primary key, foreign key relation.

An advice, while working with NoSQL database is that: never create multiple collections if you want to do primary key, foreign key relationship. The performance cost is very very huge when you have a primary key, foreign key relationship in NoSQL(you may think you are normalizing your data and separate but it's no good). So don't create so many collections, rather have different documents in one collection named Employees.

Example:

Employees = {
    PersonalInfo: {},
    AcademicInfo: {},
    PayScale: {},
    JobDesc: {},
    DailyProjectTask: {}
}

Mongojs is for connecting your database with your application and then extracting your data, it doesn't provide that kind of tightly coupled interface (it doesn't take the schema of an object and then passes it to your application to work with it as a schema).

> If in the application the requirement is to work with the database where we want to have some kind of check between the nodejs application and mongodb to make sure that some fields in the documents are not missing we use another library named `Mongoose`.

Mongoose is an ODM tool which takes care of managing your object modelling in nodejs for your application. Now you can use Mongoose api to work with your MongoDB.

Now we bring the concept of Model.
