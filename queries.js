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
    const connection = createConnection();

    connection.query('SELECT * FROM role', (err, results) => {
        if (err) {
            console.error('Error retrieving roles:', err);
            return;
        }

        console.table(results);
        
    });
}

//view all employees

function viewAllEmployees() {
    const connection = createConnection();

    connection.query('SELECT * FROM employee', (err, results) => {
        if (err) {
            console.error('Error retrieving employees:', err);
            return;
        }

        console.table(results);
        
    });
}

//add department

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

// add role

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

//add employee

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

//update employee

function updateEmployeeRole(employeeId, newRoleId) {
    const connection = createConnection();

    connection.query(
        'UPDATE employee SET role_id = ? WHERE id = ?',
        [newRoleId, employeeId],
        err => {
            if (err) {
                console.error('Error updating employee role:', err);
                return;
            }

            console.log('Employee role updated successfully!');
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
    updateEmployeeRole,
};