// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please provide license information for your project.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines for your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project.',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please provide your email address for questions about your project.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username for questions about your project.',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile('README.md', generateMarkdown(data));
        });
}

// Function call to initialize app
init();
