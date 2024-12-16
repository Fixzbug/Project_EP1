var express = require('express');
var cors = require('cors');
const mysql = require('mysql2');
const port = 5000;
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

var app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World! v 1.0.2');
});

app.get('/attractions', function(req, res, next) {
  
  pool.query("SELECT * FROM attractions", function(err, rows, fields) {
    if (err) {
      console.error("Database error: ", err);
      return res.status(500).json({ error: "Database query failed" });
    }
    // console.log(rows);
    res.json(rows);
  });
  
});

app.listen(port, () => {
  console.log(`app listening at ${port}`);
});
