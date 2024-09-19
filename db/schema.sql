DROP DATABASE IF EXISTS department_db;
CREATE DATABASE department_db;
\c department_db;
CREATE TABLE deapartments(
    id:SERIAL PRIMARY KEY
    names: VARCHAR(30) UNIQUE NOT NULL

);

CREATE DATABASE roles_db;
\c roles_db;
CREATE TABLE roles(
    id: SERIAL PRIMARY KEY
    title: VARCHAR(30) UNIQUE NOT NULL
    salary: DECIMAL NOT NULL
    department_id: INTEGER NOT NULL 
    FOREIGN KEY(department_id) 
    REFERENCES department(id)

);

CREATE DATABASE employee_db;
\c employee_db;
CREATE TABLE employees(
    id: SERIAL PRIMARY KEY
    first_name: VARCHAR(30) NOT NULL
    last_name: VARCHAR(30) NOT NULL
    role_id: INTEGER NOT NULL 
    manager_id: INTEGER
    FOREIGN KEY(role_id)
    REFERENCES roles(id)
    
);
