require('dotenv').config()
const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT, cookie TEXT, name TEXT, email TEXT, password TEXT, address TEXT, phone TEXT, card TEXT, expiration TEXT, CCV TEXT, zipcode TEXT, PRIMARY KEY(id))"
    )
  )
  .catch((err) => console.log('IGNORE THIS ERROR ', err));

module.exports = db;
