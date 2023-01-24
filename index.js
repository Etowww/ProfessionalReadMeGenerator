// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What would you like the description of this project to be?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please describes the steps needed to install this application.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please explain how to use this project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How can others contribute to the project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'How can this application be tested?',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'Please enter your github username.',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email'
    },
    {
        type: 'list',
        message: 'Please select a license for the project from the list.',
        name: 'license',
        choices: [
            'Apache',
            'Boost',
            'BSD',
            'Creative-Commons-license-family',
            'GNU',
            'MIT',
            'Mozilla',
            'No License',
        ],
    },
];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=> {
        err ? console.log(err): console.log('Readme has been successfully created')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses)=> {
        writeToFile('README.md',generateMarkdown(responses))  
    })
}

// Function call to initialize app
init();
