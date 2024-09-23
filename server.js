// `` Entry Point 
const express = require('express');
const app = express();
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
function mainPrompt() {
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
                    viewDepartments()
                    /// function //

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
                    console.log('Add a role');
                    /// function //
                    addRole();
                    break;
                case 'Add an employee':
                    console.log('Add an employee');
                    /// function //
                    addEmployee();
                    break;
                case 'Update an employee role':
                    console.log('Employee added to role');
                    /// function //
                    updateEmployee();
                    break;
            }
        })
}
mainPrompt()



///// make a function for each answers  ////
//// pass in the table into function below /////

function viewDepartments() {
    pool.query('SELECT * FROM departments', (err, res) => {
        if (err) { console.error('error') }
        mainPrompt()
        
    }
)
}

/// if Choice is > View all roles > then show > FORMATED TABLE OF > Job title , role id , department role belongs to , salary for that role
function viewRoles() {
    pool.query('SELECT * FROM roles', (err, res) => {
        if (err) { console.error('error') }
        else {
            console.table(res.rows)
        }
        mainPrompt()
    }
)
}

//if Choice is  > View all employees > then show > FORMATTED TABLE OF > Employee Data , Employee ids , First names, Last Names, Job Titles, Departments, Salaries and Managers employee report to
function viewAllEmployees() {
    pool.query('SELECT * FROM employees', (err, res) => {
        if (err) { console.error('error') }
        else {
            console.table(res.rows)
        }
        mainPrompt()
    })
}


/// inside this function add inquirer.prompt and into database  ////
/////// ADD DEPARTMENT INTO DATABASE //////
function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addingDepartment',
            message: 'What is the name of the department?'
        }])
        .then(answers => {
            pool.query('INSERT INTO departments(name) VALUES ($1)', [answers.addingDepartment], (err) => {
                if (err) {
                    console.log(err)
                }
                else { console.log('department added to database') }
                mainPrompt()
                
            }
        )
    }
    
    
)
}

/////// ADD NAME OF ROLES INTO DATABASE //////
function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'roleName',
            message: 'What is the name of the role?'
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: 'What is the salary of this role?'
        },
        {
            type: 'list',
            name: 'roleDepartment',
            message: 'Which department does the role belong to?',
            choices: ['Engenieering', 'Finance', 'Legal', 'Sales',]
        },
    ])
    .then(answers => {
        let depId;
        if (answers.roleDepartment === 'Engenieering')
            depId = 1;
        else if (answers.roleDepartment === 'Finance')
            depId = 2;
        else if (answers.roleDepartment === 'Legal')
            depId = 3;
        else if (answers.roleDepartment === 'Sales')
            depId = 4;
        else { console.log("Log invalid"); return; }
        
        pool.query
        ('INSERT INTO roles(title,salary,department_id) VALUES ($1, $2, $3)', [answers.roleName, answers.roleSalary, depId], (err) => {
            if (err) {
                console.log(err)
            }
            else { console.log('Roles added into databse') }
        }
    )
    mainPrompt()
}
)
}

///// ADD EMPLOYEE IS ADDED TO DATABASE /////
function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'What is the employee first name?'
        },
        
        {
            type: 'input',
            name: 'lastName',
            message: 'What is the employees last name?'
        },
        
        {
            type: 'list',
            name: 'employeRole',
            message: 'What is the employees role?',
            choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer'],
        },
        // for everychoice make an if else statment to 
        {
            type: 'list',
            name: 'manager',
            message: 'Who is the employees manager?',
            choices:['Martin','Grace','Tony'],
        } ])
        
        .then(answers => {
            let managerId;
            if (answers.manager === 'Martin')
                managerId = 1;
            else if (answers.manager === 'Grace')
                managerId = 2;
            else { console.log("Log invalid"); return; }
            
            pool.query('INSERT INTO employees(first_name,last_name,role_id,manager_id) VALUES ($1,$2,$3,$4)', [answers.firstName, answers.lastName, answers.employeRole,managerId], (err) => {
                if (err) { console.log(err) }
                else { console.log('employee added into database') }
                
            }
        )
        mainPrompt()
    })
}

/* function updateEmployee(){
 inquirer.prompt([
            {
                type: 'list',
                name: 'newName',
                message: 'Which employees role do you want to update?',
                choices: 
            },
            
            {
                type: 'list',
            name: 'newRole',
            message: 'Which role do you want to assign the selctes employee?'
            choices:''
        },
        
    ])  }
 */

/// UPDATE EMPLOYEE'S ROLE ON TABLE ///
