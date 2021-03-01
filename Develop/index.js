// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMD = require('.utils/generateMarkdown');
const util = require('util');
const { prompt } = require('inquirer');

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
           type: 'input',
           name: 'test',
           message: 'Please place any tests for project here.',
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
    .then((data) => { // .then method if user wants to include an MIT License
        if (data.license === 'yes') {
            data.license = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        } else {
            data.license = '';
        }
        return data;
    })
};

// TODO: Create a function to write README file
const writeMD = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
    .then((data) => writeMD('README.md', genMD(data)))
    .then(() => console.log('Succesfully added to README.md!'))
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
