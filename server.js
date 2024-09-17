// Entry Point 
const express = requirer('express');
const PORT = process.env.PORT || 3001;
const app = express();
const fs = requirer('fs');
const inquirer = requirer('inquirer');

// Middleware 
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Path to Pool
// Connect to data base with Pool

// inquirer.prompt()

/* 
{type:'list' 
name:'options', 
message:'What would you like to do?', 
choices:
['View all departments',
'View all roles',
'View all employees',
'Add a department',
'Add a role',
'Add an employee,
'Update an employee role']},
/* 

// Choice: View all departments  >> Table of >> Department names Department ids
// Choice : View all roles >> Job title , role id , department role belongs to , salary for that role
// Choice: View all employees >> Table of >> Employee Data , Employee ids , First names, Last Names, Job Titles, Departments, Salaries and Managers employee report to 
// Choice : Add a department  >> Prompt >>