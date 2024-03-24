#! /usr/bin/env node
import inquirer from "inquirer";
console.log("WELCOME TO THE NUMBER GUESSING GAME! ");
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "Please guess a number from 1 to 10 =",
    },
]);
if (answer.userguessednumber === randomNumber) {
    console.log("congratulation! You guessed the right number. ");
}
else {
    console.log("Sorry! You guessed the wrong number. \n TRY AGAIN");
}
