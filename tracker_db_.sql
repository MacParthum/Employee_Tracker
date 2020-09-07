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
  name VARCHAR(30) NOT NULL,
  title BOOLEAN NOT NULL,
  salary DECIMAL (6, 2),
  department_id INT,
  PRIMARY KEY(id)
);

CREATE TABLE employee (
 id INTEGER AUTO_INCREMENT NOT NULL,
 first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR (30),
  role_id INTEGER,
  manager_id INTEGER,
  PRIMARY KEY(ID)
);

DROP TABLE department;
DROP TABLE role;
DROP TABLE employee;

INSERT INTO department (department_name)
VALUES 
("Management"),
("Shift Leader"),
("Crew Leader"),
("Machine Operator");

INSERT INTO roles (title, salary, department_id)
VALUES
("Management", 100000, 1),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("firstname", "lastname", 1, null),


SELECT*FROM department;
SELECT*FROM role;
SELECT*FROM employee;

