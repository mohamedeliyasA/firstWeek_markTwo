var readlineSync = require('readline-sync');
const chalk = require('chalk');
var leapYear = require('leap-year');
var userName = readlineSync.question(chalk.yellowBright("We will tell you whether you born in leap year or not. \n May I know your name please? "));
var userRes = readlineSync.question("Welcome "+ chalk.yellow(userName) + "!, Press Enter");
console.log("Test");
var dob = readlineSync.question(chalk.underline.yellow("\nGive me your YEAR of Birth(e.g:1995) "));
var result = leapYear(parseInt(dob));
if(result)
{
  console.log(chalk.bold.yellowBright("Yes, You born in leap year: "+dob));
}
else
{
  console.log(chalk.bold.red("No, it is not the leap year"));
}