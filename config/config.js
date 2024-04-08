require("dotenv").config();
const DATABASE_ADMIN = process.env.DB_ADMIN;
const PORT = 3000 || process.env.PORT;
const JWT = process.env.JWT_SECRET;
const DATABASE_NAME=process.env.DB_NAME

module.exports = {
  DATABASE_ADMIN,
  PORT,
  JWT,
  DATABASE_NAME
};