// connection.js
require('dotenv').config();
const Sequelize = require('sequelize');

let sequelize;

if (process.env.CLEARDB_DATABASE_URL) {
  // For deployment on Heroku
  sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL);
} else {
  // For local development
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      port: 3306,
    }
  );
}

module.exports = sequelize;
