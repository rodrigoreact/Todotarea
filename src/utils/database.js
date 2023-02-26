const { Sequelize } = require('sequelize');

const db = new Sequelize({

    database: "todo",
    port: 5432, //Puerto de la BDD
    host: "localhost",
    username: "postgres",
    password: "arerama1907*",
    dialect: "postgres"
})

module.exports = db;

