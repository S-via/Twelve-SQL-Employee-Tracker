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

// inquirer prompt 

/* {type:'list' name:'', message:'What would you like to do?', choices:['View all departments','View all roles','View all employees','Add a department','Add a role','add an employee,'Update an employee role']},
/* 

