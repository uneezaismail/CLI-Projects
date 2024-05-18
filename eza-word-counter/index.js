import inquirer from "inquirer";
let condition = true;
while (condition) {
    const answer = await inquirer.prompt([
        {
            name: "sentence",
            type: " input",
            message: "Please enter a sentence to count the words: ",
        },
    ]);
    const words = answer.sentence.trim().split(" ");
    console.log("Words in your sentence:", words);
    console.log(`The total counted word in your sentence is/are: ${words.length}`);
    let askUser = await inquirer.prompt({
        name: "ask",
        type: "confirm",
        message: "Do you wish to analyze another sentence?",
    });
    condition = askUser.ask;
    if (!condition) {
        console.log("Exiting the program....");
        console.log(`\x1b[1mThank you!\x1b[0m`);
    }
}
