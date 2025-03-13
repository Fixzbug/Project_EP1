const express = require('express');
const cors = require('cors');
const mqtt = require('mqtt');
require('dotenv').config();

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Support for JSON payloads

const clientId = 'emqx_nodejs_' + Math.random().toString(16).substring(2, 8)
const username = 'makerz'
const password = 'makerz'
const mqttClient = mqtt.connect('mqtt://151.106.113.75:1883/mqtt', {
  clientId,
  username,
  password,
});

mqttClient.on("connect", () => {
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
  mqttClient.publish("TEST", message, { qos: 1 }, (err) => {
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


const port = process.env.PORT || 3000; // Fallback to 5000 if PORT is not defined
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

