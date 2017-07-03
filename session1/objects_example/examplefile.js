var obj = {};
obj.name = "amit";
obj.age = "20";
obj.rank = "001";

console.log(Object.keys(obj));

var props = Object.keys(obj);
for (var i = 0; i < props.length; ++i)
{
    console.log(props[i] + ' : '+ obj[props[i]]);
}
