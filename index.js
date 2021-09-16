const fs = require('fs')
const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter project name',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter description of project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation required ',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage for project'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose your license of choice',
    choices: ['Mozilla', 'Apache', 'Chrome']
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Enter names of contributors'
  },
  {
    type: 'input',
    name: 'test',
    message: 'Enter Test'
  },
  {
    type: 'input',
    name: 'questions'
    message: 'Enter any questions you may have'
  }
]