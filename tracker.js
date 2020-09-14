var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootroot",
  database: "tracker",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  beginPrompt();
});

function beginPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please select a category.",
        choices: [
          "Add Department",
          "Add Role",
          "Add Employee",
          "View Department",
          "View Role",
          "View Employee",
          "Update Employee Role",
          "Exit",
        ],
        name: "UserInput",
      },
    ])
    .then((answers) => {
      switch (answers.UserInput) {
        case "Add Department":
          createDepartment();
          break;
        case "Add Role":
          createRole();
          break;
        case "Add Employee":
          createEmployee();
          break;
        case "View Department":
          viewDepartment();
          break;
        case "View Role":
          viewRole();
          break;
        case "View Employee":
          viewEmployee();
          break;
        case "Update Employee Role":
          updateRole();
          break;
        case "Exit":
          connection.end();
          break;
      }
    });
}

function createDepartment() {
  console.log("Create a new department.\n");
  inquirer
    .prompt([
      {
        type: "input",
        name: "departmentName",
        message: "Please enter department name",
      },
    ])
    .then((answers) => {
      console.log(answers);
      connection.query(
        "INSERT INTO department SET ?",
        {
          department_name: answers.departmentName,
        },
        function (err, res) {
          if (err) throw err;
          console.log("Department Added");
          beginPrompt();
        }
      );
    });
}

function createRole() {
  console.log("Create a new role.\n");
  inquirer
    .prompt([
      {
        type: "input",
        name: "roleName",
        message: "Please enter role name",
      },
      {
        type: "input",
        name: "departmentId",
        message: "what is the department ID for this role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is this roles salary?",
      },
    ])
    .then((answers) => {
      console.log(answers);
      connection.query(
        "INSERT INTO role SET ?",
        {
          title: answers.roleName,
          salary: answers.salary,
          department_id: answers.departmentId,
        },
        function (err, res) {
          if (err) throw err;
          console.log("Department Added");
          beginPrompt();
        }
      );
    });
}

function createEmployee() {
  console.log("Create a new employee.\n");
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "Please enter first name",
      },
      {
        type: "input",
        name: "last_name",
        message: "what is the last name?",
      },
      {
        type: "input",
        name: "role_id",
        message: "What is this roles id?",
      },
    ])
    .then((answers) => {
      console.log(answers);
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answers.first_name,
          last_name: answers.last_name,
          role_id: answers.role_id,
        },
        function (err, res) {
          if (err) throw err;
          console.log("Department Added");
          beginPrompt();
        }
      );
    });
}

function viewDepartment() {
  connection.query("SELECT department_name FROM department", function (
    err,
    res
  ) {
    if (err) throw err;
    console.table(res);
    beginPrompt();
  });
}

function viewRole() {
  connection.query("SELECT title, salary, department_id FROM role", function (
    err,
    res
  ) {
    if (err) throw err;
    console.table(res);
    beginPrompt();
  });
}

function viewEmployee() {
  connection.query(
    "SELECT first_name, last_name, role_id FROM employee",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      beginPrompt();
    }
  );
}

