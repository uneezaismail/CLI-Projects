#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "height",
        type: "number",
        message: "Enter your height in meters :",
    },
    {
        name: "weight",
        type: "number",
        message: "Enter your weight in Kilogram :",
    }
]);
let calculateBMI = (answer.weight / (answer.height * answer.height));
console.log();
if (answer.weight > 0 && answer.height > 0) {
    console.log(`Here's your BMI : ${calculateBMI}`);
}
else {
    console.log("Please enter valid height and weight");
}
;
if (calculateBMI >= 18 && calculateBMI <= 25) {
    console.log("'Congratulations! Your BMI falls within the normal healthy range.'");
}
else if (calculateBMI > 25) {
    console.log("Your BMI suggests that you are over-weight");
}
else if (calculateBMI < 18) {
    console.log("Your BMI suggests that you are under-weight.");
}
