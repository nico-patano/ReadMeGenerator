const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter your project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter your project description",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information",
  },
  {
    type: "input",
    name: "collaborators",
    message:
      "List your collaborators, if any, with links to their GitHub profiles.",
  },
  {
    type: "input",
    name: "tests",
    message: "Insert the commands to test your program",
  },
  {
    type: "input",
    name: "questions",
    message: "Insert an e-mail for contact",
  },
  {
    type: "list",
    name: "license",
    message: "Choose your license",
    choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3"],
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("README.md", generateMarkdown({ ...answers }));
  });
}

// Function call to initialize app
init();