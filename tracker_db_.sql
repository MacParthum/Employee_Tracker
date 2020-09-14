DROP DATABASE IF EXISTS tracker;

CREATE DATABASE tracker;

USE tracker;

CREATE TABLE department (
  id INTEGER AUTO_INCREMENT NOT NULL, 
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE role (
  id INTEGER AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY(id)
);

CREATE TABLE employee (
 id INTEGER AUTO_INCREMENT NOT NULL,
 first_name VARCHAR(30) NOT NULL,
 last_name VARCHAR (30),
 role_id INTEGER,
 manager_id INT,
  PRIMARY KEY(ID)
);



INSERT INTO department (department_name)
VALUES 
("Management"),
("Shift Leader"),
("Crew Leader"),
("Machine Operator");

INSERT INTO role (title, salary, department_id)
VALUES
("Management", 100000, 1),
("Shift Leader", 40000, 2),
("Crew Leader", 30000, 3),
("Machine Operator", 20000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Joe", "Rogan", 1, 1),
("Ron", "White", 1, 3),
("Bill", "Burr", 2, 1),
("Nikki", "Glaser", 1, 3),
("Simon", "Garfunkel", 4, 1);


SELECT*FROM department;
SELECT*FROM role;
SELECT*FROM employee;
