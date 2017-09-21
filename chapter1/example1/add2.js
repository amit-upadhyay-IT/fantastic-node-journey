function add(x, y, z)
{
    return x + y + z;
}

module.exports = add;

/*
Here we are directly exporting the defination of the method add, so here if I would have written 
module.exports.add = add;
then inside the index.js i need to write add2.add(); while calling the above method
*/
