// Entry Point 
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs');
const inquirer = require('inquirer');

// Middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Path to Pool
// Connect to data base with Pool

// inquirer.prompt()

inquirer.prompt([

    {
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices:
            ['View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',]
    }])
    /// Use switch case for the answers////
    .then(answers => {
        switch (answers.options) {
            case 'View all departments':
                console.log('');
                /// function //
                break;

            case 'View all employees':
                console.log('');
                /// function //
                break;
            case 'Add a department':
                console.log('');
                /// function //
                break;
            case 'Add a role':
                console.log('');
                /// function //
                break;
            case 'Add an employee':
                console.log('');
                /// function //
                break;
            case 'Update an employee role':
                console.log('');
                /// function //
                break;
        }
    });


///// make a function for each answers  ////
/*
//// pass in the table into function below /////
viewDepartments();
viewEmployees();

//// inside this function add inquirer.prompt ////
addDepartment() =>
    inquirer.prompt([
{type:'input'
name:''
message:'What is the name of the department?'
input:''
}
/////// ADD DEPARTMENT INTO DATABASE //////

addRole() =>
inquirer.prompt([
{type:'input',
name:'',
message:'What is the name of the role??'
}
{type:'input',
name:'',
message:'Whatis the slary of this role?'
}
{type:'input',
name:'',
message:'Which department does the role belong to?'
}
/////// ADD NAME OF ROLL INTO DATABASE //////


addEmployee();
updateEmployee();


/*


// if Choice is > View all departments  > then show > FORMATTED TABLE OF > with > Department names , Department ids
// if Choice is > View all roles >> Job title , role id , department role belongs to , salary for that role
//if Choice is  > View all employees >> Table of >> Employee Data , Employee ids , First names, Last Names, Job Titles, Departments, Salaries and Managers employee report to 
// if Choice is > Add a department  >> Prompt >>
