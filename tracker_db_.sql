DROP DATABASE IF EXISTS tracker;
-- Creates the "animals_db" database --
CREATE DATABASE tracker;

USE tracker_db;

CREATE TABLE department (
  id INTEGER(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  
  name VARCHAR(30) NOT NULL

);

CREATE TABLE role (
  id INTEGER(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,

  name VARCHAR(30) NOT NULL,

  title BOOLEAN NOT NULL,

  sal DECIMAL (6, 2),

  department_id INT
);

CREATE TABLE employee (
 id INTEGER(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,

  first_name VARCHAR(30) NOT NULL,

  last_name VARCHAR (30),

  role_id INTEGER,

  manager_id INTEGER
);
