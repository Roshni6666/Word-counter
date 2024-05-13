#! /usr/bin/env node

// Importing inquirer and chalk pachages
import inquirer from "inquirer";
import chalk from "chalk";

// Display a colourfull Welcome message
console.log(chalk.bold.cyanBright("\n \t\tCode With Roshni - Word Counter\n"));
console.log("=".repeat(60));

// Prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);

// Trimming the sentence and splitting it into the words based on "spaces"
let words = answers.sentence.trim().split(" ");

// Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("-Sentence Words"));
console.log(words);
console.log(chalk.bold(`\n - word count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));

