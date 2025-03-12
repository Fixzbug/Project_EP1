const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise'); // Use promise-based MySQL
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000; // Fallback to 5000 if PORT is not defined

// Ensure required environment variables are set
// if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_DATABASE) {
//   console.error("Missing required environment variables! Please check your .env file.");
//   process.exit(1);
// }

// MySQL Connection Pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.use(cors()); // Enable CORS
app.use(express.json()); // Support for JSON payloads

// Root Route
app.get('/', (req, res) => {
  res.send(`Hello World! v ${process.env.APP_VERSION || '1.0.0'}`);
});

// Get Attractions Route
app.get('/api', async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM data");
    res.json(rows);
  } catch (err) {
    console.error("Database error: ", err.message);
    res.status(500).json({ error: "Database query failed" });
  }
});

// Graceful Shutdown
process.on('SIGINT', () => {
  pool.end(() => {
    console.log("Database connection pool closed.");
    process.exit(0);
  });
});

// Start the Server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
