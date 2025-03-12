// const express = require('express');
// const cors = require('cors');
// const mysql = require('mysql2/promise'); // Use promise-based MySQL
// require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const mongoose = require('mongoose');
const mqtt = require('mqtt');
require('dotenv').config();
const port = process.env.PORT || 5000; // Fallback to 5000 if PORT is not defined

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Support for JSON payloads

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

// เชื่อมต่อ MongoDB
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });


// เชื่อมต่อ MQTT
const mqttClient = mqtt.connect(process.env.MQTT_BROKER);
mqttClient.on("connect", () => console.log("Connected to MQTT Broker"));


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

// const express = require('express');
// const cors = require('cors');
// const mysql = require('mysql2/promise');
// const mongoose = require('mongoose');
// const mqtt = require('mqtt');
// require('dotenv').config();

// const port = process.env.PORT || 5000;
// const app = express();
// app.use(cors());
// app.use(express.json());

// // MySQL Connection Pool
// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// // MongoDB Connection
// let mongoConnected = false;
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to MongoDB");
//     mongoConnected = true;
//   })
//   .catch(err => console.error("MongoDB connection error:", err));

// // MQTT Connection
// let mqttConnected = false;
// const mqttClient = mqtt.connect(process.env.MQTT_BROKER);

// mqttClient.on("connect", () => {
//   console.log("Connected to MQTT Broker");
//   mqttConnected = true;
// });

// mqttClient.on("error", (err) => {
//   console.error("MQTT connection error:", err);
//   mqttConnected = false;
// });

// // Root Route - Check connections
// app.get('/', (req, res) => {
//   res.json({
//     message: "Service is running",
//     mysql: pool ? "Connected" : "Not Connected",
//     mongo: mongoConnected ? "Connected" : "Not Connected",
//     mqtt: mqttConnected ? "Connected" : "Not Connected",
//     version: process.env.APP_VERSION || '1.0.0'
//   });
// });

// // Get Data from MySQL
// app.get('/api', async (req, res) => {
//   try {
//     const [rows] = await pool.query("SELECT * FROM data");
//     res.json(rows);
//   } catch (err) {
//     console.error("Database error: ", err.message);
//     res.status(500).json({ error: "Database query failed" });
//   }
// });

// // Graceful Shutdown
// process.on('SIGINT', () => {
//   pool.end(() => {
//     console.log("Database connection pool closed.");
//   });
//   mqttClient.end(() => {
//     console.log("MQTT client disconnected.");
//   });
//   process.exit(0);
// });

// // Start the Server
// app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`);
// });
