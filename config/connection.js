const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection(
	{
		// host: "localhost",
		user: process.env.DB_NAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_USER,
	},

	console.log(
		`Connected to ${process.env.DB_NAME} database as ${process.env.DB_USER}.`
	)
);

module.exports = db;
