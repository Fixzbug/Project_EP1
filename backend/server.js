require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Import routes
const corsOptions = require('./src/config/corsOptions');
const authRoutes = require('./src/routes/auth.routes');
const deviceRoutes = require('./src/routes/device.routes');

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// API Routes
app.use('/auth', authRoutes);
app.use('/api', deviceRoutes);

// 404 Handler for unmatched routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('❌ Global Error:', err);
  res.status(err.code || 500).json({
    error: err.message || 'Internal Server Error',
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
