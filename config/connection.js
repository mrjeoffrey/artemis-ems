const mysql = require("mysql");
require("dotenv").config();

const connectDB = mysql.createConnection({
	host: "localhost",
	port: 5010,
	user: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_USER,
});

connectDB.connect(function (err) {
	if (err) throw err;
	console.log(`Connected as ${connect.threadID}.`);
});

module.exports = connectDB;
