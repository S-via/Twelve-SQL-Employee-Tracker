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

            case 'View all roles':
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
 // if Choice is > View all departments  > then show > FORMATTED TABLE OF > with > Department names , Department ids

viewRoles();
/// if Choice is > View all roles >> Job title , role id , department role belongs to , salary for that role

viewAllEmployees();
//if Choice is  > View all employees >> Table of >> Employee Data , Employee ids , First names, Last Names, Job Titles, Departments, Salaries and Managers employee report to
/*

/// inside this function add inquirer.prompt ////
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
message:'What is the slary of this role?'
}
{type:'input',
name:'',
message:'Which department does the role belong to?'
choices:['Engenieering','Finance','Legal','Sales','Service',]}
>>>> log "ADDED __ TO THE DATABASE"
/////// ADD NAME OF ROLL INTO DATABASE //////


addEmployee();
inquirer.prompt([
    {type:'input',
    name:'',
    message:'What is the employee first name?'}
    
    {type:'input',
    name:'',
    message:'What is the employees last name?'}
    
    {type:'input',
    name:'',
    message:'What is the employees role?'
    choices:['Sales Lead','Salesperson','Lead Engineer','Software Engineer','Account Manager','Accountant','Legal Team Lead','Lawyer'}

{type:'input',
name:'',
message:'Who is the employees manager?'
choices:['']}
]) 
///// ADD EMPLOYEE IS ADDED TO DATABASE /////

updateEmployee();
inquirer.prompt([
{type:'input',
name:'',
message:'Which employees role do you want to update?'}

{type:'input',
name:'',
message:'Which role do you want to assign the selctes employee?'}
])
/// UPDATE EMPLOYEE'S ROLE ON TABLE ////

