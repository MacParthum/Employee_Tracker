var mysql = require("mysql");
var inquirer = require('inquirer');
const cTable = require('console.table');


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootroot",
  database: "tracker"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
//   createProduct();
});

function beginPrompt() {
    inquirer.prompt([
        {
            type: "list",
            message: "Please select a category.",
            category: ["Add Department", "Add Role", "Add Employee", "View Department", "View Role", "View Employee", "Update Employee Role", "Exit"],
            name: "UserInput"
        },
    ])

    // switch(expression) {
    //     case x:
    //       // code block
    //       break;
    //     case y:
    //       // code block
    //       break;
    //     default:
    //       // code block
    //   }

    .then(answers => {
        switch (answers.UserInput) {
            case "Add Department":
                newDepartments();
                break;
            case "Add Role":
                newRole();
                break;
            case "Add Employee":
                newEmployee();
                break;
            case "View Department":
                viewEmployee();
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
                connection.end()
                break;
        };


    });
};


function viewEmployee() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM employee", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.table(res);
      beginPrompt();
    });
  }
  
