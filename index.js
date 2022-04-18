// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const util = require('util'); 
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the projects title?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the name of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What does your application do?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please describe your project!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'tableOfContents',
        message: 'What is included in this README? (Select all that apply',
        choices: ['Name', 'Description', 'Table of contents', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project? (Optional)',
        validate: installInput => {
            if (installInput) {
                return true;
            } 
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would someone use your project? (Optional)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } 
        }
    },
    {
        type: 'checkbox',   
        name: 'license',
        message: 'What kind of license is needed for this project? ',
        choices: ['BSD', 'MIT', 'GPL']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who else contributed to this project? (Optional)',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } 
        }
    },
    {
        type: 'confirm',
        name: 'tests',
        message: 'Are there tests provided in your project? (Optional)',
        default: false
    },
   {    type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)?',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('You need to enter a project GitHub link!');
                return false;
            }
        }
   },
   {    type: 'input',
        name: 'question',
        message: 'What is your email? (Required)?',
        validate: questionInput => {
            if (questionInput) {
                return true;
            } else {
                console.log('You need to enter your email!');
                return false;
            }
        }
   }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return;
        } else {
            console.log("success")
        }
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


