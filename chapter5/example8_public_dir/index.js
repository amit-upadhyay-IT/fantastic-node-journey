var exp = require("express");

var app = exp();

app.use(exp.static(__dirname+"/public"));

var port = process.env.PORT || 5000;

app.listen(port, function(){
	console.log("Server is listening on port "+port);
});
