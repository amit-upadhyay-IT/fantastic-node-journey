var add1 = require('./add1.js');
var add2 = require('./add2.js');

var z = add1.add(1, 2);
var y = add2(1, 2, 3);

console.log("Sum is "+z);
console.log("y = "+ y);

// this is how node.js takes care of managing modules for you according to node.js add1.js is one module add2.js is other module and they both run in their own different namespaces and they are loaded only once into the memory.

