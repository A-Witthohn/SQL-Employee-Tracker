const inquirer = require('inquirer')
const mysql = require('mysql2');

const db = mysql.createConnection({
host: 'localhost',
port:3306,
user: 'root',
password: '12345',
database: "employee_tracker_db"
});

