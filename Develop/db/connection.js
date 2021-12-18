const mysql = require("mysql2");

//Create connection with mySQL using credentials//

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "*",
  database: "employees"
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;