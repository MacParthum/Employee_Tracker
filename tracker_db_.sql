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
("Obi Wan", "Kenobi", 1, 1),
("Darth", "Vader", 1, 1),
("Cassian", "Andor", 2, 1),
("Din", "Djarin", 1, 3),
("Luke", "Skywalker", 4, 1);


SELECT*FROM department;
SELECT*FROM role;
SELECT*FROM employee;


