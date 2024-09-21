// `` Entry Point 
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs');
const inquirer = require('inquirer');
const { Pool } = require('pg');

// Middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Connect to data base throughPool
const pool = new Pool(
    {
        user: 'postgres',
        password: 'postgres',
        host: 'localhost',
        database: 'tracker_db'
    },
    console.log('Connected to tracker database')
)
pool.connect(); // connects to databse tracker_db
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
                console.log('viewing all departments');
                /// function //
                viewDepartments();
                break;

            case 'View all roles':
                console.log('viewing all roles');
                /// function //
                viewRoles();
                break;
            case 'View all employees':
                console.log('Viewing all employees');
                /// function //
                viewAllEmployees();
                
                break;
            case 'Add a department':
                console.log('Add the department');
                /// function //
                addDepartment();
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
//// pass in the table into function below /////
// if Choice is > View all departments  > then show > FORMATTED TABLE OF > with > Department names , Department ids
function viewDepartments() {
    pool.query('SELECT * FROM departments',(err,res) => {
        if (err) { console.error('error') }
        else {
            console.table(res.rows)
        }
        return;
    }
    )
} 

/// if Choice is > View all roles > then show > FORMATED TABLE OF > Job title , role id , department role belongs to , salary for that role
function viewRoles() {
    pool.query('SELECT * FROM roles', (err,res) => {
        if (err) { console.error('error')}
        else {
        console.table(res.rows)}
        return;
    }
    )
} 

//if Choice is  > View all employees > then show > FORMATTED TABLE OF > Employee Data , Employee ids , First names, Last Names, Job Titles, Departments, Salaries and Managers employee report to
function viewAllEmployees() {
    pool.query('SELECT * FROM employees', (err,res) => {
        if (err) { console.error('error')}
        else {
        console.log(res.rows)}
        return;
    })
}


/// inside this function add inquirer.prompt ////
function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addingDepartment',
            message: 'What is the name of the department?'
        }])
        .then(answers => {
            const data = [answers.addingDepartment];
            const query = 'INSERT INTO departments(name) VALUES ($1)'
            pool.query(query, data, (err) => {
                if (err) {
                    console.log(err)
                }
                else { console.log('department added to database') }
                return;

            }
        )}
        
    
    )}


/////// ADD DEPARTMENT INTO DATABASE //////


/*
addRole() =>
inquirer.prompt([
{type:'input',
name:'roleName',
message:'What is the name of the role?'
}
{type:'input',
name:'roleSalary',
message:'What is the salary of this role?'
}
{type:'input',
name:'roleDepartment',
message:'Which department does the role belong to?'
choices:['Engenieering','Finance','Legal','Sales',]}
>>>> log "ADDED __ TO THE DATABASE"
/////// ADD NAME OF ROLL INTO DATABASE //////


addEmployee();
inquirer.prompt([
    {type:'input',
    name:'firstName',
    message:'What is the employee first name?'}
    
    {type:'input',
    name:'lastName',
    message:'What is the employees last name?'}
    
    {type:'input',
    name:'employeRole',
    message:'What is the employees role?'
    choices:['Sales Lead','Salesperson','Lead Engineer','Software Engineer','Account Manager','Accountant','Legal Team Lead','Lawyer'}

    {type:'input',
    name:'manager',
    message:'Who is the employees manager?'
    choices:['']}]) 
///// ADD EMPLOYEE IS ADDED TO DATABASE /////

updateEmployee();
inquirer.prompt([
{type:'input',
name:'newName',
message:'Which employees role do you want to update?'}

{type:'input',
name:'newRole',
message:'Which role do you want to assign the selctes employee?'}
])
/// UPDATE EMPLOYEE'S ROLE ON TABLE ///*/

/* app.listen(PORT, () => {
    console.log (`server is running {PORT}`);
    }  */