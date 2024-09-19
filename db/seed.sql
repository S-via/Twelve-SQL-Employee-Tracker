INSERT INTO departments(id, name)
VALUES (001,'Engineering'),
        (002,'Finance'),
        (003,'Legal'),
        (004,'Sales');

INSERT INTO role(id,title,salary,department_id) 
VALUES 
(001,'Sales Lead',8000,1),
 (002,'Salesperson',8000,2),
 (003,'Lead Engineer',8000,3),
 (004,'Software Engineer',8000,4),
 (005,'Account Manager',8000,5),
 (006,'Accountant',8000,6),
 (007,'Legal Team Lead',8000,7),
 (008,'Lawyer',8000,8);


INSERT INTO employee(id,first_name,last_name,role_id,manager_id)
VALUES
()

SELECT * FROM departments;

SELECT * FROM role;
