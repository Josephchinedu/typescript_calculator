"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstString = (0, readline_sync_1.question)("Enter first number:: ");
    var operator = (0, readline_sync_1.question)("Enter operator:: ");
    var secondStr = (0, readline_sync_1.question)("Enter second number:: ");
    var validInput = isNumber(firstString) && isOperator(operator) && isNumber(secondStr);
    if (validInput) {
        var firstInput = parseInt(firstString);
        var secondInput = parseInt(secondStr);
        var result = calculate(firstInput, operator, secondStr);
        console.log(result);
    }
    else {
        console.log("invalid input");
        main();
    }
}
function calculate(firstInput, operator, secondInput) {
    switch (operator) {
        case '+':
            return firstInput + secondInput;
        case '-':
            return firstInput - secondInput;
        case '/':
            return firstInput / secondInput;
        case '*':
            return firstInput * secondInput;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
main();
