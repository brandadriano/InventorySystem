const { pool } = require("./db");

async function insertData() {
  const [username,password,email] = process.argv.slice(2);
  try {
  const res = await pool.query(
    "INSERT INTO accounts (username, password, email) VALUES ($1, $2, $3)",
    [username,password,email]
  );
  console.log(`Add to the table accounts:${username}`);
} catch (error) {
    console.error(error)
  }
}

insertData();