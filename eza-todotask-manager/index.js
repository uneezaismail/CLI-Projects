#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\x1b[1mWelcome to the Todo Manager!\x1b[0m");
let toDos = [];
let condition = true;
let markCompleteFlag = false; // Flag to indicate if tasks have been marked as complete
while (condition) {
    let choices = await inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Add Task",
                "Mark as Complete",
                "Delete Task",
                "Display Tasks",
                "Exit",
            ],
        },
    ]);
    if (choices.choice === "Add Task") {
        let task = await inquirer.prompt({
            name: "task",
            type: "input",
            message: "Enter the task you want to add: ",
        });
        toDos.push({ task: task.task, completed: false }); // Store tasks along with completion status
        console.log("Task added:", task.task);
        console.log("All Tasks:", toDos.map((item) => item.task)); // Display all tasks as an array
    }
    else if (choices.choice === "Mark as Complete") {
        let myindex = await inquirer.prompt({
            name: "index",
            type: "input",
            message: "Enter the index of the task to mark as complete:",
        });
        let markedIndex = myindex.index;
        if (!isNaN(markedIndex) && markedIndex >= 0 && markedIndex < toDos.length) {
            toDos[markedIndex].completed = true;
            console.log();
            markCompleteFlag = true; // Set flag to true
            console.log("Task Marked as complete : " + "*", toDos[markedIndex].task);
        }
        else if (markedIndex >= toDos.length || markedIndex < 0) {
            console.log("invalid index");
        }
    }
    else if (choices.choice === "Delete Task") {
        let index = await inquirer.prompt({
            name: "index",
            type: "input",
            message: "Enter the index of the task to delete:",
        });
        if (!isNaN(index.index) && index.index >= 0 && index.index < toDos.length) {
            let deletedTask = toDos.splice(index.index, 1);
            console.log("\u2715", deletedTask[0]);
        }
        else {
            console.log("Invalid index.");
        }
    }
    else if (choices.choice === "Display Tasks") {
        console.log("Your Todo List:");
        if (markCompleteFlag) {
            // If tasks have been marked as complete before displaying, show marks
            toDos.forEach((task, index) => {
                console.log(`${index}. ${task.completed ? "*" : ""} ${task.task}`);
            });
        }
        else {
            // If tasks haven't been marked as complete, show without marks
            toDos.forEach((task, index) => {
                console.log(`${index}. ${task.task}`);
            });
        }
    }
    else if (choices.choice === "Exit") {
        condition = false;
        console.log("Exiting...");
    }
}
console.log("\x1b[1mThank you for using the eza-todotask-manager!\x1b[1m");
