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
                console.error('Error displaying Departments:', error);
                returnToMainMenu();
              });
            break;
          case 'View all roles':
            viewAllRoles()
            .then(() => returnToMainMenu())
              .catch((error) => {
                console.error('Error displaying Roles:', error);
                returnToMainMenu();
              });
            break;
          case 'View all employees':
            viewAllEmployees()
            .then(() => returnToMainMenu())
              .catch((error) => {
                console.error('Error displaying Employees:', error);
                returnToMainMenu();
              });
            break;
          case 'Add a department':
            promptAddDepartment()
            break;
          case 'Add a role':
            promptAddRole()
            break;
          case 'Add an employee':
            promptAddEmployee()
            break;
          case 'Update an employee role':
            promptUpdateEmployeeRole()
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

  async function promptAddDepartment() {
    try {
      const department = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Enter the name of the department:',
      });
  
      await addDepartment(department.name);
      returnToMainMenu();
    } catch (error) {
      console.error('Error adding department:', error);
      returnToMainMenu();
    }
  }


  function returnToMainMenu() {
    console.log(); // Add an empty line for readability
    mainMenu();
  }


  mainMenu();

