var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "demo"
});

connection.connect(function(err) {
  console.log("connect");
  if (err) throw err;
});

module.exports = connection;
