const inquirer = require("inquirer");
const fs = require("fs");
const gm = require("./utils/generateMarkdown");
const fileName = "README.md";

const licenseList = [
{
    name: "MIT",
    value: 0
},
{
    name: "Apache",
    value: 1
},
{
    name: "GPL",
    value: 2
}
];

// array of questions for user
const questions = [

    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Write a description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "installation",
    },
    {
        type: "input",
        message: "What is this app to be used for?",
        name: "usage",
    },
    {
        type: "input",
        message: "How should others contribute to this?",
        name: "contribution",
    },
    {
        type: "input",
        message: "How can this application be tested?",
        name: "testing",
    },
    {
        type: "list",
        message: "What license will this project have?",
        name: "licensing",
        choices: licenseList
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address so users can contact you?",
        name: "email",
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, gm(data), (err) => {
        if (err) console.log("Error");
        else console.log("Success")
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((answers) => writeToFile(fileName, answers))
    .catch(error => {
        if(error.isError){
            console.log("Error")
        }   else {
            console.log("Success")
        }
    })
}

// function call to initialize program
init();
