const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./utils/generateHtml");
const team = []


function promptUser() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "Please provide employee's first name."
            },
            {
                type: "input",
                name: "managerID",
                message: "Please provide employee's ID."
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Please provide employee's email address."
            },
            {
                type: "input",
                name: "managerOfficeNum",
                message: "Please provide manager's office number."
            },
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNum)
            team.push(manager)
            generateTeam()
        })
}

function generateTeam() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "teamMember",
                message: "Please choose from list below to generate your team",
                choices: ["Engineer", "Intern", "Complete & Exit"]
            },
        ]).then(answers => {
            switch (answers.teamMember) {
                case "Engineer":
                    createEngineer()

                    break;
                case "Intern":
                    createIntern()

                    break;
                default:
                    fs.writeFileSync("index.html", generateHTML(team), "utf-8")
            }
        })
}
function createEngineer() {

    inquirer
        .prompt([
                {
                    type: "input",
                    name: "engineerName",
                    message: "Please provide employee's first name."
                },
                {
                    type: "input",
                    name: "engineerID",
                    message: "Please provide employee's ID."
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "Please provide employee's email address."
                },
                {
                    type: "input",
                    name: "engineerGitHub",
                    message: "Please provide employee's GitHub User Name."
                },
            ]).then(answers => {
                const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub)
                team.push(engineer)
                generateTeam()
            })
    }
    
    function createIntern() {
    
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "Please provide employee's first name."
                },
                {
                    type: "input",
                    name: "internID",
                    message: "Please provide employee's ID."
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "Please provide employee's email address."
                },
                {
                    type: "input",
                    name: "internSchool",
                    message: "Please provide name of employee's school."
                },
            ]).then(answers => {
                const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
                team.push(intern)
                generateTeam()
            })
    }
    promptUser()