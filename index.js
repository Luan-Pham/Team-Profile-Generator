const fs = require("fs");
const inquirer = require("inquirer");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");

const team = [];

const buildManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the manager? (Required)",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter the name of the manager");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's ID? (Required)",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter the ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the email of the manager? (Required)",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter an email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number? (Required)",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter the office number");
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

buildManager();
