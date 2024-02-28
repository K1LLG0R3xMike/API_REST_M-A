const { Sequelize } = require('sequelize');

const bdmysql = new Sequelize('peliculas', 'root', '', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql'
});

module.exports = { bdmysql };