
INSERT INTO departments(name)
VALUES ('Sales'),      
        ('Engineering'),
        ('Finance'),
        ('Legal');

INSERT INTO roles(title,salary,department_id) 
VALUES 
('Sales Lead',8000,1),
 ('Salesperson',8000,1),
 ('Lead Engineer',8000,2),
 ('Software Engineer',8000,2),
 ('Account Manager',8000,3),
 ('Accountant',8000,3),
 ('Legal Team Lead',8000,4),
 ('Lawyer',8000,4);


 INSERT INTO employees(first_name,last_name,role_id,manager_id)
VALUES
('silvia','villalba',1,NULL); 

SELECT * FROM departments;

SELECT * FROM roles;
SELECT * FROM employees;
