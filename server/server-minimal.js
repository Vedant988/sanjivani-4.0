import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();

// Simple CORS for development
app.use(cors({
  origin: true, // Allow all origins for testing
  credentials: true
}));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple routes
app.post('/api/contact', (req, res) => {
  console.log('Contact request:', req.body);
  res.json({
    success: true,
    message: 'Contact form submitted successfully',
    data: req.body
  });
});

app.post('/api/bookings', (req, res) => {
  console.log('Booking request:', req.body);
  res.json({
    success: true,
    message: 'Booking submitted successfully',
    data: req.body
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is healthy',
    timestamp: new Date().toISOString()
  });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
});