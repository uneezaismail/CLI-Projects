#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter first Number",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter second Number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log("Your Answer is : ", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log("Your Answer is : ", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log("Your Answer is : ", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log("Your Answer is : ", answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operator");
}
