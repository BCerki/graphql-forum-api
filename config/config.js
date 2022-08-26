require("dotenv").config();

const dbDetails = {
  username: process.env.DB_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
};

module.exports = {
  development: dbDetails,
  production: dbDetails,
};
