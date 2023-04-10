// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Get ready to create your README file! Please start by entering your project's title."
    },
    {
        type: "input",
        name: "description",
        message: "Add a description of your application."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your application?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use. Include screenshots as needed."
    },
    {
        type: "list", 
        choices: ["MIT", "Apache License 2.0", "GNU GPLv3", "No License"],
        name: "license",
        message: "Which license would you like to cover your application? If you choose not to have one, please select 'No License'."
    },
    {
        type: "input",
        name: "contribute",
        message: "Include guildlines for how other developers can contribute to your application."
    },
    {
        type: "input",
        name: "tests",
        message: "Give instructions on how to run necessary tests for your application."
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username so that others can view your work."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email so others can contact you with any questions they might have about your work."
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fileName = `./yourREADME/README.md`
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success! Please navigate to the yourREADME folder to view your README.md file.'))
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile("./yourREADME/README.md", answers);
        });
}

// Function call to initialize app
init();
