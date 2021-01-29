const Sequelize = require("sequelize");

const connection = new Sequelize('guia_press','root','36347123M@x',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;