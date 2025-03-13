const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const mongoose = require('mongoose');
const mqtt = require('mqtt');
require('dotenv').config();

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Support for JSON payloads

// MySQL Connection Pool
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// สถานะการเชื่อมต่อ
let isMqttConnected = false;


// เชื่อมต่อ MQTT
const mqttClient = mqtt.connect(process.env.MQTT_BROKER);
mqttClient.on("connect", () => {
  isMqttConnected = true;
  console.log("Connected to MQTT Broker");
});
mqttClient.on("error", (err) => {
  isMqttConnected = false;
  console.error("MQTT Error:", err);
});

// เชื่อมต่อ MongoDB

// Root Route
app.get('/', (req, res) => {
  res.send({
    message: `Hello World! v2.0.0 ${isMqttConnected}`
  });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
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

const port = process.env.PORT || 3000; // Fallback to 5000 if PORT is not defined
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

