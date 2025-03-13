const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const mongoose = require('mongoose');
const mqtt = require('mqtt');
require('dotenv').config();

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Support for JSON payloads

// MySQL Connection Pool prodcution
// const pool = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// MySQL Connection Pool testing
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// สถานะการเชื่อมต่อ
let isMqttConnected = false;


const clientId = 'emqx_nodejs_' + Math.random().toString(16).substring(2, 8)
const username = 'makerz'
const password = 'makerz'

// เชื่อมต่อ MQTT
const mqttClient = mqtt.connect(process.env.MQTT_BROKER, {
  clientId,
  username,
  password,
});

// const mqttClient = mqtt.connect('mqtt://151.106.113.75:1883/mqtt', {
//   clientId,
//   username,
//   password,
// });

mqttClient.on("connect", () => {

  isMqttConnected = true;

  console.log("Connected to MQTT Broker");

  // Message Payload
  const message = JSON.stringify({
    status: "success",
    transaction_id: "TXN123456",
    amount: 100.00,
    currency: "THB",
    timestamp: new Date().toISOString()
  });

  // Publish to topic 'testqrpayment'
  mqttClient.publish("paymentsucess", message, { qos: 1 }, (err) => {
    if (err) {
      console.error("❌ Publish failed:", err);
    } else {
      console.log(`📤 Message sent to 'testqrpayment':`, message);
    }
    // mqttClient.end(); // Disconnect after publishing
  });

});


mqttClient.on("error", (err) => {
  isMqttConnected = false;
  console.error("MQTT Error:", err);
});

// เชื่อมต่อ MongoDB

// Root Route
app.get('/', (req, res) => {
  res.send({
    message: `Hello World! v3.0.0 ${isMqttConnected}`
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

