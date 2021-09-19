const fs = require('fs')
const inquirer = require('inquirer')

const questions = ([
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
    choices: ['MIT', 'Apache v2.0']
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
])

.then(answers) => {
  if(answers.license === 'MIT'){
    licensebadge = '![License badge] https://img.shields.io/badge/license-MIT-blue'
    licenseinfo = 'This project is currently using the license MIT'
  } else if (answers.license === 'Apache v2.0') {
    licensebadge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg'
    licenseinfo = "This project is currently using the license Apache v2.0"
  } 
}

fs.appendFile('README.md', `
  # title
   ${answers.title}
  # description
   ${answers.description}
  # installation
   ${answers.installation}
  # usage
   ${answers.usage}
  # license
   ${answers.license}
  # tests
   ${answers.tests}
  # contributing
   ${answers.contributing}
   
   # Questions
   Additional questions, please contact me on my Github or email:
   Email: ${answers.email}

   Github: [${answers.username}](https://github.com/${answers.username})

  # table-of-contents
  
  1. [title](#title)
  2. [description](#description)
  3. [installation](#installation)
  4. [usage](#usage)
  5. [license](#license)
  6. [tests](#tests)
  7. [contributing](#contributing)
  8. [questions](#questions)
  9. [table of contents](#table-of-contents)
  
  `, err =>{if(err){console.log(err)}})
})
.catch(err=>console.log(err))