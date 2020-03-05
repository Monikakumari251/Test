var express = require("express");
var router = express.Router();
var db = require("../config/db");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/url", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

//rest api to get all customers
router.get("/customer", function(req, res) {
  db.query("select * from customer", function(error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

//rest api to get a single customer data
router.get("/customer/:id", function(req, res) {
  db.query("select * from customer where id=?", [req.params.id], function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

router.post("/create", function(req, res) {
  var params = req.body;
  console.log(params);
  db.query("INSERT INTO customer SET ?", params, function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

//rest api to update record into mysql database
router.put("/update", function(req, res) {
  db.query(
    "UPDATE `customer` SET `name`=?,`address`=?,`phone`=? where `id`=?",
    [req.body.name, req.body.address, req.body.phone, req.body.id],
    function(error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

module.exports = router;
