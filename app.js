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
            viewAllDepartments();
            break;
          case 'View all roles':
            viewAllRoles();
            break;
          case 'View all employees':
            viewAllEmployees();
            break;
          case 'Add a department':
            promptAddDepartment();
            break;
          case 'Add a role':
            promptAddRole();
            break;
          case 'Add an employee':
            promptAddEmployee();
            break;
          case 'Update an employee role':
            promptUpdateEmployeeRole();
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
      });
  }


  mainMenu();