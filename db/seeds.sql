SET FOREIGN_KEY_CHECKS=0;
-- Insert data into the department table
INSERT INTO department (name)
VALUES ('Resturant'),
       ('Sports'),
       ('School');

-- Insert data into the role table
INSERT INTO role (title, salary, department_id)
VALUES ('Dishwasher', 50000, 1),
       ('Chef', 600000, 1),
       ('Owner', 7000000, 1),
       ('Basketball player', 5500000, 2),
       ('Coach', 6500000, 2),
       ('Team Owner', 75000000, 2),
       ('Teacher', 52000, 3),
       ('Principal', 62000, 3),
       ('Superintendent', 72000, 3);

-- Insert data into the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Smith', 1, 2),
       ('Bill', 'Johnson', 2, 3),
       ('Tim', 'Washington', 3, NULL),
       ('Cat', 'Drake', 4, 5),
       ('Sarah', 'Walsh', 5, 6),
       ('Kate', 'Trix', 6, NULL),
       ('Todd', 'Ponder', 7, 8),
       ('Podrick', 'Chase', 8, 9),
       ('Manny', 'Simmons', 9, NULL);

-- Set foreign key checks back to 1 to re-enable foreign key constraints
SET FOREIGN_KEY_CHECKS=1;