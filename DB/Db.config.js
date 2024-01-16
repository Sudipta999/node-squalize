const { Sequelize } = require("sequelize");


const db = new Sequelize('testdb', 'root', '', {
    dialect: "mysql",
    host: "localhost",
});

try {
    db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}