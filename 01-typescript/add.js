"use strict";
exports.__esModule = true;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var val1;
var val2;
rl.question("first number: ", function (answer) {
    val1 = answer;
    rl.question("second number: ", function (answer) {
        val2 = answer;
        console.log("The sum is: " + (parseInt(val1) + parseInt(val2)));
        rl.close();
    });
});
