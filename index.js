const { info } = require('console');
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
    .then((mana) => {
      console.log(mana);
      const manager = new Manager(
        mana.name,
        mana.id,
        mana.email,
        mana.officeNumber,
        mana.role
      );
      if (mana.officeNumber) {
        mana.role = 'Manager';
      }
      team.push(mana);

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
    .then((engi) => {
      console.log(engi);
      const engineer = new Engineer(
        engi.name,
        engi.id,
        engi.email,
        engi.school,
        engi.role
      );
      if (engi.github) {
        engi.role = 'Intern';
      }
      team.push(engi);
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
    .then((inte) => {
      console.log(inte);
      const intern = new Intern(
        inte.name,
        inte.id,
        inte.email,
        inte.school,
        inte.role
      );
      if (inte.school) {
        inte.role = 'Intern';
      }
      team.push(inte);
      return choices('Intern');
    });
};

choices();

function positionfilled() {
  console.log(team);
  console.log(team[0].name);
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
