const fs = require('fs');
const inquirer = require('inquirer');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');
const generateTemplate = require('./src/template');

const team = [];

const choices = function (choice) {
  removedChoices.push(choice);
  const allChoices = ['Manager', 'Engineer', 'Intern', "Position's Filled"];
  const updatedChoices = allChoices.filter((item) => {
    return !removedChoices.includes(item);
  });

  inquirer
    .prompt([
      {
        name: 'employee',
        type: 'list',
        message: 'Position:',
        choices: updatedChoices,
      },
    ])
    .then(function (select) {
      if (select.employee === 'Engineer') {
        engineerQ();
      } else if (select.employee === 'Intern') {
        buildIntern();
      } else if (select.employee === 'Manager') {
        buildManager();
      } else {
        positionfilled();
      }
    });
};

const buildManager = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the manager? (Required)',
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log('Please enter the name of the manager');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the manager's ID? (Required)",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log('Please enter the ID');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the email of the manager? (Required)',
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log('Please enter an email');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number? (Required)",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log('Please enter the office number');
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      team.push(manager);
      console.log(team);
    });
};

const buildIntern = function () {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Intern? (Required)',
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log('Please enter the name of the Intern');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the intern's ID? (Required)",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log('Please enter the ID');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the email of the Intern? (Required)',
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log('Please enter an email');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'school',
        message: 'Which school does the intern attend? (Required)',
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log('Please enter a school');
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school,
        answers.role
      );
      if (answers.school) {
        answers.role = 'Intern';
      }
      newEmployee.push(intern);
      return choices('Intern');
    });
};
