const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const app = express();
const port = process.env.PORT || 4000;
// (duplicate require/use of cors removed)

require('dotenv').config();

app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  // default to the init.sql database so queries succeed when .env isn't configured
  database: process.env.DB_NAME || 'dailymoney_contacts',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.get('/', (req, res) => res.json({ status: 'ok' }));

// create enquiry
app.post('/api/enquiries', async (req, res) => {
  const { name, email, phone, company, message } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO enquiries (name, email, phone, company, message) VALUES (?, ?, ?, ?, ?)',
      [name, email, phone, company, message]
    );
    res.json({ id: result.insertId });
  } catch (err) {
    // Provide clearer error when the database hasn't been selected/created
    console.error('DB error inserting enquiry:', err.message || err);
    if (err && err.code === 'ER_NO_DB_ERROR') {
      return res.status(500).json({ error: 'No database selected. Run the init.sql to create the database or set DB_NAME in backend/.env' });
    }
    res.status(500).json({ error: 'Database error' });
  }
});

// recent 3 enquiries
app.get('/api/enquiries/recent', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM enquiries ORDER BY created_at DESC LIMIT 3');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
