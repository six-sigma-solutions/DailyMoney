const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

(async () => {
  try {
    const sqlPath = path.join(__dirname, 'init.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    const host = process.env.DB_HOST || 'localhost';
    const user = process.env.DB_USER || 'root';
    const password = process.env.DB_PASS || '';

    const connection = await mysql.createConnection({ host, user, password, multipleStatements: true });
    console.log('Connected to MySQL server. Running init.sql...');
    await connection.query(sql);
    console.log('init.sql executed successfully.');
    await connection.end();
  } catch (err) {
    console.error('Error running init.sql:', err.message || err);
    process.exit(1);
  }
})();
