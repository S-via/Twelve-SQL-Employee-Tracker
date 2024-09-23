
INSERT INTO departments(id, name)
VALUES ('Engineering'),
        ('Finance'),
        ('Legal'),
        ('Sales');

INSERT INTO roles(title,salary,department_id) 
VALUES 
('Sales Lead',8000),
 ('Salesperson',8000),
 ('Lead Engineer',8000),
 ('Software Engineer',8000),
 ('Account Manager',8000),
 ('Accountant',8000),
 ('Legal Team Lead',8000),
 ('Lawyer',8000);


 INSERT INTO employees(id,first_name,last_name,role_id,manager_id)
VALUES
('silvia','villalba',NULL); 

SELECT * FROM departments;

SELECT * FROM roles;
SELECT * FROM employees;
