const mysql = require("mysql");
const dbConfig = require("./config/dbConfig");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  database: dbConfig.DATABASE,
  port: "3306",
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  connectionLimit: 10,
});

// open the MySQL connection
connection.connect((error) => {
  if (error) {
    return console.error(
      "error while connecting to database: " + error.message
    );
  }
  console.log("Successfully connected to the database.");
});

module.exports = connection;
