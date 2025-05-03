require('dotenv').config();
const express = require('express');
const path = require('path');
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

// // Serve static frontend files
// app.use(express.static(path.join(__dirname, 'public')));

// // Default redirect to login page
// app.get('/', (req, res) => {
//   console.log('🌐 Redirecting to /login.html');
//   res.redirect('/login.html');
// });

// 404 Handler
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

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
