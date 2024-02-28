const { Sequelize } = require('sequelize');

const bdmysql = new Sequelize('bd2', 'root', '', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql'
});

module.exports = { bdmysql };