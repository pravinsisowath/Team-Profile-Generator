const inquirer = require("inquirer")
const fs = require("fs")
const Employee = require("./lib/Employee")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")

const team = []
function start() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Role?',
            choices: ['Engineer', 'Intern', 'Manager'] 
        }
    ])
    .then(() => {
       switch(role) {
           case 'Employee':
            Employee()
           break
           case 'Engineer':
            Engineer()
           break
           case 'Intern':
            Intern()
           break
           case 'Manager':
            Manager()
           break
       }
}
)}

function Employee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'ID?'
        }
    ]).then(answers => {
        let employee = new Employee(answers.name, answers.email, answers.id)
        team.push(employee)
    })
}

function Engineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'ID?'
        }
    ]).then(answers => {
        let engineer = new Engineer(answers.name, answers.email, answers.id)
        team.push(engineer)
    })
}

function Intern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'ID?'
        }
    ]).then(answers => {
        let intern = new Intern(answers.name, answers.email, answers.id)
        team.push(intern)
    })
}

function Manager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'ID?'
        }
    ]).then(answers => {
        let manager = new Manager(answers.name, answers.email, answers.id)
        team.push(manager)
    })
}

start()