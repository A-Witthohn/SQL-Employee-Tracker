const inquirer = require('inquirer')
const mysql = require('mysql2');

function createConnection(){
const db = mysql.createConnection({
host: 'localhost',
port:3306,
user: 'root',
password: '12345',
database: "employee_tracker_db"
});
db.connect(err => {
if (err) {
    console.error('Error connecting to the database', err);
    return;
}
console.log('Connected to the database!');
});

return db;
}

module.exports = createConnection;