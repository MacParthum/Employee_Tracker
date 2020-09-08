var mysql = require("mysql");
var inquirer = require('inquirer');
var cTable = require('console.table');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "tracker"

});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    beginPrompt()
});

function beginPrompt() {
    inquirer.prompt([
        {
            type: "list",
            message: "Please select a category.",
            choices: ["Add Department", "Add Role", "Add Employee", "View Department", "View Role", "View Employee", "Update Employee Role", "Exit"],
            name: "UserInput"
        },
    ]).then(answers => {
            switch (answers.UserInput) {
                case "Add Department":
                    createDepartment();
                    break;
                case "Add Role":
                    newRole();
                    break;
                case "Add Employee":
                    newEmployee();
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
                    connection.end()
                    break;
            };


        });
};

function createDepartment() {
    console.log("Create a new department.\n");
    inquirer.prompt([
        {
           type: "input",
           name: "departmentName",
           message: "Please enter department name"
        }
    ]).then(answers => {
        console.log(answers)
        connection.query(
            "INSERT INTO department SET ?",
            {
                department_name: answers.departmentName
            },
            function (err, res) {
                if (err) throw err;
                console.log("Department Added")
                beginPrompt()
            }
        );
    })
}
// function createRole() {
//     console.log("Inserting a new product...\n");
//     var query = connection.query(
//         "INSERT INTO products SET ?",
//         {
//             flavor: "Rocky Road",
//             price: 3.0,
//             quantity: 50
//         },
//         function (err, res) {
//             if (err) throw err;
//             console.log(res.affectedRows + " product inserted!\n");
//             // Call updateProduct AFTER the INSERT completes
//             updateProduct();
//         }
//     );
// }

// function createEmployee() {
//     console.log("Inserting a new product...\n");
//     var query = connection.query(
//         "INSERT INTO products SET ?",
//         {
//             flavor: "Rocky Road",
//             price: 3.0,
//             quantity: 50
//         },
//         function (err, res) {
//             if (err) throw err;
//             console.log(res.affectedRows + " product inserted!\n");
//             // Call updateProduct AFTER the INSERT completes
//             updateProduct();
//         }
//     );

// }

function viewDepartment() {
    connection.query("SELECT department_name FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        beginPrompt();
    });
}


// function viewRole() {

//     connection.query("SELECT * FROM role", function (err, res) {
//         if (err) throw err;
//         console.table(res);
//         beginPrompt();
//     });
// }

// function viewEmployee() {

//     connection.query("SELECT * FROM employee", function (err, res) {
//         if (err) throw err;
//         console.table(res);
//         beginPrompt();
//     });
// }


// function updateProduct() {
//     console.log("Updating all Rocky Road quantities...\n");
//     var query = connection.query(
//         "UPDATE products SET ? WHERE ?",
//         [
//             {
//                 quantity: 100
//             },
//             {
//                 flavor: "Rocky Road"
//             }
//         ],
//         function (err, res) {
//             if (err) throw err;
//             console.log(res.affectedRows + " products updated!\n");
//             // Call deleteProduct AFTER the UPDATE completes
//             deleteProduct();
//         }
//     );

//     // logs the actual query being run
//     console.log(query.sql);
// }
