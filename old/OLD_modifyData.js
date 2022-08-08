const { pool } = require("./db");

async function modifyData() {
  const [username,password,email] = process.argv.slice(2);
  try {
    const res = await pool.query("UPDATE accounts SET password = $1 WHERE username = $2", [
     username,
     password
    ]);
    console.log(`Updated the shark name to ${username}`);
  } catch (error) {
    console.error(error);
  }
}

modifyData();