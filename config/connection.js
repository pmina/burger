// Pull in required dependencies
var mysql = require('mysql');

// Create the MySQL connection object
var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'burgers_db'
	});

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});

// Export connection for ORM use
module.exports = connection;