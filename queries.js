const mysql = require('mysql2');
const createConnection = require('./connection');

function viewAllDepartments() {
    const connection = createConnection();
  
    connection.query('SELECT * FROM department', (err, results) => {
      if (err) {
        console.error('Error retrieving departments:', err);
        return;
      }
  
      console.table(results);
      connection.end();
    });
  }

  function viewAllRoles() {
    const connection = createConnection();
  
    connection.query('SELECT * FROM role', (err, results) => {
      if (err) {
        console.error('Error retrieving roles:', err);
        return;
      }
  
      console.table(results);
      connection.end();
    });
  }

  function viewAllEmployees() {
    const connection = createConnection();
  
    connection.query('SELECT * FROM employee', (err, results) => {
      if (err) {
        console.error('Error retrieving employees:', err);
        return;
      }
  
      console.table(results);
      connection.end();
    });
  }

  function addDepartment(name) {
    const connection = createConnection();
  
    connection.query('INSERT INTO department (name) VALUES (?)', [name], err => {
      if (err) {
        console.error('Error adding department:', err);
        return;
      }
  
      console.log('Department added successfully!');
      connection.end();
    });
  }

  function addRole(title, salary, departmentId) {
    const connection = createConnection();
  
    connection.query(
      'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)',
      [title, salary, departmentId],
      err => {
        if (err) {
          console.error('Error adding role:', err);
          return;
        }
  
        console.log('Role added successfully!');
        connection.end();
      }
    );
  }

  function addEmployee(firstName, lastName, roleId, managerId) {
    const connection = createConnection();
  
    connection.query(
      'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
      [firstName, lastName, roleId, managerId],
      err => {
        if (err) {
          console.error('Error adding employee:', err);
          return;
        }
  
        console.log('Employee added successfully!');
        connection.end();
      }
    );
  }




  module.exports = {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees,
    addDepartment,
    addRole,
    addEmployee,

  };