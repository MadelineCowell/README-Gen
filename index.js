const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")

const generateMarkdown = require("./utils/generateMarkdown")



// array of questions for user
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "project",
        message: "What is your project name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project."
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD3", "None"]
        // Look these up
    },
    {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "repoRun",
        message: "What information does the user need to know to run the repo?"
    },
    {
        type: "input",
        name: "repoContribute",
        message: "What information does the user need to know to contribute to the repo?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName),data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((response)=>{
        console.log("Generating README...")
        writeToFile("README.md", generateMarkdown({...response}))
    })
}

// function call to initialize program
init();
