const sequelize = require("./config/connection");

const PORT = process.env.PORT || 5010;

sequelize.sync().then(() => {
	mysql.createConnection(PORT, () => console.log("Now listening"));
});
