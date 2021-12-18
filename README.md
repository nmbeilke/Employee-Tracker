# Homework-Employee-Tracker
Command line app using Node and mySQL to manage a database of employee and department info

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

  
- **What was your motivation?**
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
  
- **Why did you build this project?**
We built this project because developers frequently have to create CMS interfaces that allow non-developers to easily view and interact with information stored in databases. We also built this command-line application from scratch to practice using Node.js, Inquirer, and MySQL.

- **What problem does it solve?**
This allows a user to manage a company's employee database.

- **What did you learn?**
I learned how to create and connect a DB to a CLI app.

- **What challenges did you encounter?**
Starting mySQL and permissions.
  
 ## Installation 
 Make sure to do an "npm install" before running this application, and make sure to add any mySQL username and password credentials into the "connection.js" file.
 
 ## Usage
 Link to watch application running: https://watch.screencastify.com/v/Bp0i6qvTRgTwyfrhAcSP
 Run this with  "node index.js" in the command line, Then you can simply answer the prompts to view or make changes to the employee DB.

## Credits  
Assignment from The Coding Boot Camp at UC San Diego Extension in Partnership With Trilogy Education Services, LLC, Full Stack Part-Time Flex, September 2021 Cohort

