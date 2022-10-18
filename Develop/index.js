// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project name?"
    },
    {
        type: "input",
        name: "Description",
        message: "Describe your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "What commmand should be run to install the project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the application?"
    },
    {
        type: "input",
        name: "test",
        message: "What commands should be used to run Test?"
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "none"]
    },
    {
        type: "input",
        name: "contributing",
        message: "How can the user contribute to this project?"
    },
    {
        type: "input",
        name: "GitHub",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),"/dist",fileName),data)
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
       writeToFile("README.md",generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
