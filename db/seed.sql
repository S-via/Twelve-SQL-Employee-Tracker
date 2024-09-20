INSERT INTO departments(id, name)
VALUES (001,'Engineering'),
        (002,'Finance'),
        (003,'Legal'),
        (004,'Sales');

INSERT INTO roles(id,title,salary,department_id) 
VALUES 
(001,'Sales Lead',8000,4),
 (002,'Salesperson',8000,4),
 (003,'Lead Engineer',8000,1),
 (004,'Software Engineer',8000,1),
 (005,'Account Manager',8000,2),
 (006,'Accountant',8000,2),
 (007,'Legal Team Lead',8000,3),
 (008,'Lawyer',8000,3);


 INSERT INTO employees(id,first_name,last_name,role_id,manager_id)
VALUES
(001,'silvia','villalba',1,1); 

SELECT * FROM departments;

SELECT * FROM roles;
SELECT * FROM employees;
