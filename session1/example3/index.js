var chalk = require('chalk');
var error = chalk.bold.red;

console.log(chalk.green("this is a green color text"));

console.log(chalk.blue("this is a blue color text"));

console.log(chalk.red("this is a red color text"));

console.log(chalk.red.bgYellow.bold("this is text in red color with yellow background and bold style"));

console.log(error("Error!"));

var theme1 = chalk.blue.bgRed.bold;

console.log(theme1("This written in  theme1"));
