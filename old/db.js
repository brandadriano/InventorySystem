const { Pool} = require('pg')

const pool = new Pool({
  user: 'adriano',
  database: 'sentinel',
  password: 'adriano',
  port: 5432,
  host: 'localhost',
});

module.exports = { pool };