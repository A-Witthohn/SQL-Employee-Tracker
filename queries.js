const mysql = require('mysql2');
const createConnection = require('./connection');


//view all departments

function viewAllDepartments() {
    return new Promise((resolve, reject) => {
        const connection = createConnection();

        connection.query('SELECT * FROM department', (err, results) => {
            connection.end(); // Close the connection after the query is executed

            if (err) {
                reject(err); // Reject the promise if there's an error
                return;
            }

            console.table(results);
            resolve(); // Resolve the promise when the query is successful
        });
    });
}
//view all roles

function viewAllRoles() {
    return new Promise((resolve, reject) => {
        const connection = createConnection();

        connection.query('SELECT * FROM role', (err, results) => {
            if (err) {
                reject(err); // Reject the promise if there's an error
                return;
            }

            console.table(results);
            resolve(); // Resolve the promise when the query is successful

        });
    });
}

//view all employees

function viewAllEmployees() {
    return new Promise((resolve, reject) => {
        const connection = createConnection();

        connection.query('SELECT * FROM employee', (err, results) => {
            if (err) {
                reject(err); // Reject the promise if there's an error
                return;
            }

            console.table(results);
            resolve(); // Resolve the promise when the query is successful

        });
    });
}

//add department

function addDepartment(name) {
    return new Promise((resolve, reject) => {
      const connection = createConnection();
  
      const sql = 'INSERT INTO department (name) VALUES (?)';
      const values = [name];
  
      connection.query(sql, values, (err, result) => {
        if (err) {
          reject(err); // Reject the promise if there's an error
        } else {
          console.log(`${result.affectedRows} department(s) added.`);
          resolve(); // Resolve the promise when the query is successful
        }
  
        connection.end(); // Close the connection after the query is executed
      });
    });
  }

// add role

function addRole(title, salary, departmentId) {
  return new Promise((resolve, reject) => {
    const connection = createConnection();

    const sql = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
    const values = [title, salary, departmentId];

    connection.query(sql, values, (err, result) => {
      connection.end(); // Close the connection after the query is executed

      if (err) {
        reject(err); // Reject the promise if there's an error
      } else {
        console.log(`${result.affectedRows} role(s) added.`);
        resolve(); // Resolve the promise when the query is successful
      }
    });
  });
}
//add employee

function addEmployee(firstName, lastName, roleId, managerId) {
  return new Promise((resolve, reject) => {
    const connection = createConnection();

    const sql = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
    const values = [firstName, lastName, roleId, managerId];

    connection.query(sql, values, (err, result) => {
      connection.end(); // Close the connection after the query is executed

      if (err) {
        reject(err); // Reject the promise if there's an error
      } else {
        console.log(`${result.affectedRows} employee(s) added.`);
        resolve(); // Resolve the promise when the query is successful
      }
    });
  });
}

//update employee

function updateEmployeeRole(employeeId, roleId, managerId) {
  return new Promise((resolve, reject) => {
    const connection = createConnection();

    const sql = 'UPDATE employee SET role_id = ?, manager_id = ? WHERE id = ?';
    const values = [roleId, managerId, employeeId];

    connection.query(sql, values, (err, result) => {
      connection.end(); // Close the connection after the query is executed

      if (err) {
        reject(err); // Reject the promise if there's an error
      } else {
        console.log(`${result.affectedRows} employee role updated.`);
        resolve(); // Resolve the promise when the query is successful
      }
    });
  });
}


module.exports = {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
};