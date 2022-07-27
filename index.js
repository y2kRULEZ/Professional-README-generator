// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is the project title?",
    },
    {
        type:"input",
        name:"description",
        message:"What is the project's description?",
    },
    {
        type:"input",
        name:"installation",
        message:"How do you install the project?",
    },
    {
        type:"list",
        name:"license",
        message:"Choose the following license:",
        choices:["MIT","IBM","Apache"]
    },
    {
        type:"input",
        name:"usage",
        message:"How to use the project?",
    },
    {
        type:"input",
        name:"credit",
        message:"Who all has helped/worked on the assignment?",
    }
];


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data=>{
        console.log(data)
        fs.writeFileSync("./output/README.md",generateMarkdown(data))


    })
}

// Function call to initialize app
init();
