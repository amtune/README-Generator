// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "What is the title of your project?",
        type: "input"
    },
    {
        name: "description",
        message: "What is a brief summary of your project?",
        type: "input"
    },
    {
        name: "installation",
        message: "How would you install needed dependancies?",
        type: "input"
    },
    {
        name: "usage",
        message: "How would you start this application?",
        type: "input"
    },
    {
        name: "credits",
        message: "Who contributed to this project?",
        type: "input"
    },
    {
        name: "installation",
        message: "What was added to the package.json through installation?",
        type: "input"
    },
    {
        name: "tests",
        message: "How did you test this application?",
        type: "input"
    },
    {
        name: "license",
        message: "Which license is needed?",
        type: "list",
        choices: [ "None", "MIT", "Apache", "Boost" ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(data),
        err ? console.log(err) : console.log("README.md successfully created!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
