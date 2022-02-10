const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter your project title:",
    default: "Project-Title",
  },
  {
    type: "input",
    name: "description",
    message: "Enter your project description",
    default: "Project-Description",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information",
    default:
      "Run ```node index.js``` in the terminal and answer the required questions.",
  },
  {
    type: "input",
    name: "collaborators",
    message:
      "List your collaborators, if any, with links to their GitHub profiles.",
    default: "https://github.com/nico-patano",
  },
  {
    type: "input",
    name: "tests",
    message: "Insert the commands to test your program",
    default: "```npm test```",
  },
  {
    type: "input",
    name: "questions",
    message: "Insert an e-mail for contact",
    default: "email@email.com",
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