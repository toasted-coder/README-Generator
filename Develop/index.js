// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMD = require('.utils/generateMarkdown');
const util = require('util');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
          },
          {
            type: 'input',
            name: 'description',
            message: 'Please add a description of your project',
          },
          {
            type: 'list',
            name: 'contents',
            message: 'Do you need a table of contents?',
            choices: ['yes', 'no']
          },
          {
            type: 'input',
            name: 'installation',
            message: 'What are your installation instructions?',
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Please input recommended usage.',
          },
          {
            type: 'input',
            message: 'Please list any contributors.',
            name: 'contributions',
          },
          {
            type: 'list',
            name: 'testq',
            message: 'Have you written any tests you would like to include?',
            choices: ['yes', 'no']
          },
          {
           type: 'input',
           name: 'test',
           message: 'Please link your tests here..[test name](link)',
          },
          {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub Username.',
          },
          {
            type: 'input',
            name: 'email',
            message: 'Please enter your email.',
          },
          {
            type: 'input',
            name: 'license',
            message: 'Would you like to include the MIT license?',
            choices: ['MIT License']
          },
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
