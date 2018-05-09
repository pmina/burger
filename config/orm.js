var connection = require("./connection.js");

var orm = {
  selectAll: function(table, callback) {
    var queryString = "SELECT * FROM " + table;

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  insertOne: function(table, val, callback) {
    var queryString =
      "INSERT INTO " + table + "(burger_name) VALUES (" + val + ")";

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  updateOne: function(table, condition, callback) {
    var queryString =
      "UPDATE " + table + " SET devoured=true WHERE id=" + condition;

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  }
};

module.exports = orm;
