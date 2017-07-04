var obj = {};
obj.name = "amit";
obj.age = "20";
obj.rank = "001";

console.log(Object.keys(obj));

// iterating through the object obj.
var props = Object.keys(obj);
for (var i = 0; i < props.length; ++i)
{
    console.log(props[i] + ' : '+ obj[props[i]]);
}

// constructors
function TreeHouse(name, tree, color)
{
     this.housename = name;
     this.treename = tree;
     this.housecolor = color;
}

TreeHouse.prototype.owner = 'Amit Upadhyay';
var amitTreeHouse = new TreeHouse('Babu', 'Oak', 'Yellow');
console.log(amitTreeHouse.owner);

dir(TreeHouse);
