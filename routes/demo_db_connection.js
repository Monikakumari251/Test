var mysql = require("mysql");
var express = require("express");
var app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "demo"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  app.get("/url", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "abc"]);
  });
  // app.get("/url", (req, res, next) => {
  //   var sql =
  //     "select * from  customer";
  //   con.query(sql, function(err, result) {
  //     if (err) throw err;
  //     console.log("1 record inserted");
  //   });
  //   res.json([result]);
  // });
});
