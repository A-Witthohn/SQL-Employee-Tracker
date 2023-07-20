const inquirer = require('inquirer');
const { viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole,} = require('./queries');
const mysql = require('mysql2');


function mainMenu() {
    inquirer
      .prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit',
        ],
      })
      .then(({ action }) => {
        switch (action) {
          case 'View all departments':
            viewAllDepartments()
              .then(() => returnToMainMenu())
              .catch((error) => {
                console.error('Error displaying departments:', error);
                returnToMainMenu();
              });
            break;
          case 'View all roles':
            viewAllRoles().then(returnToMainMenu);
            break;
          case 'View all employees':
            viewAllEmployees().then(returnToMainMenu);
            break;
          case 'Add a department':
            promptAddDepartment().then(returnToMainMenu);
            break;
          case 'Add a role':
            promptAddRole().then(returnToMainMenu);
            break;
          case 'Add an employee':
            promptAddEmployee().then(returnToMainMenu);
            break;
          case 'Update an employee role':
            promptUpdateEmployeeRole().then(returnToMainMenu);
            break;
          case 'Exit':
            console.log('Goodbye!');
            process.exit(0);
          default:
            console.log('Invalid choice. Please try again.');
            mainMenu();
        }
      });
  }

  function promptAddDepartment() {
    inquirer
      .prompt({
        type: 'input',
        name: 'name',
        message: 'Enter the name of the department:',
      })
      .then(({ name }) => {
        addDepartment(name);
        mainMenu();
      });
  }


  function returnToMainMenu() {
    console.log(); // Add an empty line for readability
    mainMenu();
  }


  mainMenu();

