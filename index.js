const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const generateTemplate = require('./src/template');

const team = [];
const removedChoices = [];

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
        buildEngineer();
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
        answers.officeNumber,
        answers.role
      );
      if (answers.officeNumber) {
        answers.role = 'Manager';
      }
      team.push(manager);

      return choices('Manager');
    });
};

const buildEngineer = function () {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Engineer? (Required)',
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log('Please enter the name of the Engineer');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the Engineer's ID? (Required)",
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
        message: 'What is the email of the Engineer? (Required)',
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
        name: 'github',
        message: 'What is the gitHub of the engineer (Required)',
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log('Please provide the github');
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.school,
        answers.role
      );
      if (answers.github) {
        answers.role = 'Intern';
      }
      team.push(engineer);
      return choices('Engineer');
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
      team.push(intern);
      return choices('Intern');
    });
};

choices();

function positionfilled() {
  console.log(team);
  fs.writeFileSync(
    './dist/index.html',
    generateTemplate(team),

    'utf-8',
    function (err) {
      if (err) {
        throw err;
      } else {
        console.log('Success! A file has now been created.');
      }
    }
  );
}
