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


  module.exports = {
    viewAllDepartments,
    viewAllRoles,
  };