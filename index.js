
// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer');
require("dotenv").config("")
// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: process.env.DB_USER,
        // MySQL password
        password: process.env.DB_PW,
        database: process.env.DB_NAME
    },
    console.log(`connected to emloyee_db`)
);

const userprompt = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "options",
                message: "what would you like to do",
                choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
            }
        ])
        .then((answers) => {
            // Use user feedback for... whatever!!
            console.log(answers)
            if (answers.options === "view all departments") {
                viewdepatment()
            }
            else if (answers.options === "view all roles") {
                viewroles()
            }

            else if (answers.options === "view all employees") {
                viewemployees()
            }
            else if (answers.options === "add a department"){
                adddepartment()
            }
            else if (answers.options === "add a role"){
                addrole()
            }
            else if (answers.options === "add an employee"){
                addemployee()
            }
            else if (answers.options === "update an employee role"){
                updatemployeeerole()
            }


        })
}



const viewdepatment = () => {
    db.query('SELECT * FROM department', function (err, results) {
        if (err) {
            console.log(err);
        }
        console.table(results);
        userprompt()
    });
}
const viewroles = () => {
    db.query('SELECT * FROM role', function (err, results) {
        if (err) {
            console.log(err);
        }
        console.table(results);
        userprompt()
    });
}
const viewemployees = () => {
    db.query('SELECT * FROM employee', function (err, results) {
        if (err) {
            console.log(err);
        }
        console.table(results);
        userprompt()
    });
}
const adddepartment = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "what department would you like?",

            }
        ])
        .then((answers) => {
            db.query("INSERT INTO department SET ?", answers, function (err, results) {
                if (err) {
                    console.log(err);
                }
                console.table(results)
                userprompt()
            })
        })
}
const addrole = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: "what title would you like?",

            },
            {
                type: "input",
                name: "salary",
                message: "what salary would you like?",

            },
            {
                type: "input",
                name: "department_id",
                message: "what department_id would you like?",

            },

        ])
        .then((answers) => {
            db.query("INSERT INTO role SET ?", answers, function (err, results) {
                if (err) {
                    console.log(err);
                }
                console.table(results)
                userprompt()
            })
        })
}
const addemployee = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "first_name",
                message: "what is the employees first name?",

            },
            {
                type: "input",
                name: "last_name",
                message: "what is the employees last name?",

            },
            {
                type: "input",
                name: "role_id",
                message: "what role_id would you like?",

            },

        ])
        .then((answers) => {
            db.query("INSERT INTO employee SET ?", answers, function (err, results) {
                if (err) {
                    console.log(err);
                }
                console.table(results)
                userprompt()
            })
        })
}
const updatemployeeerole = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "employee",
                message: "what employee would you like to place a new role to?",
                choices: ["Arthur Miller", "Chinua Achebe", "Margaret Atwood", "Gabriel Garcia Marquez", "Simone de Beauvoir"]

            },
            {
                type: "input",
                name: "role_id",
                message: "what role_id would you like?",

            },

        ])
        .then((answers) => {
            db.query("UPDATE role SET ?", answers, function (err, results) {
                if (err) {
                    console.log(err);
                }
                console.table(results)
                userprompt()
            })
        })
}








userprompt()