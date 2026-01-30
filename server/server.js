/**
 * @file server.js
 * @description Main entry point for the Team Sanjivani 4.0 Backend API.
 */

import express from 'express';
import mongoose from 'mongoose'; // Added: Required for health checks
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFound } from './middleware/notFound.js';

// Import routes
import productRoutes from './routes/productRoutes.js';
import teamRoutes from './routes/teamRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize Express app
const app = express();

/**
 * =========================================================================
 * Security & Middleware Configuration
 * =========================================================================
 */

// 1. Helmet: Secure HTTP Headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'"],
      connectSrc: ["'self'", "https://*.sentry.io"]
    }
  },
  hsts: {
    maxAge: 31536000, // 1 year
    includeSubDomains: true,
    preload: true
  }
}));

// 2. CORS: Strict Origin Control
// Define allowed origins explicitly
const allowedOrigins = [
  process.env.FRONTEND_URL,          // Production (e.g., https://www.sanjivani.com)
  "https://sanjivani-40.vercel.app", // Your Vercel App
  "https://sanjivani-api.onrender.com", // Your Render Backend
  "http://localhost:5173",           // Local Vite
  "http://localhost:3000",           // Local Alt
  "http://127.0.0.1:5173"
].filter(Boolean); // Removes undefined values if env vars are missing

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, curl, postman)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('Blocked by CORS:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Vital for cookies/sessions
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// 3. Rate Limiting: Prevent Abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false
});
app.use('/api/', limiter);

// Stricter rate limiting for auth/admin routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 10, // Limit login attempts
  message: {
    success: false,
    message: 'Too many login attempts, please try again later.'
  }
});

// 4. Body Parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// 5. Request Logging (Simple)
app.use((req, res, next) => {
  console.log(`📝 ${req.method} ${req.path}`);
  next();
});

/**
 * =========================================================================
 * Routes & API Endpoints
 * =========================================================================
 */

// Health Checks
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is active',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

app.get('/api/health/ready', (req, res) => {
  const dbState = mongoose.connection.readyState;
  if (dbState === 1) {
    res.status(200).json({ status: 'ready', database: 'connected' });
  } else {
    res.status(503).json({ status: 'not ready', database: 'disconnected' });
  }
});

// Application Routes
app.use('/api/products', productRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/bookings', bookingRoutes);

// Protected Admin Routes (Apply strict limiter)
app.use('/api/admin', authLimiter, adminRoutes);

/**
 * =========================================================================
 * Error Handling (Must be last)
 * =========================================================================
 */

app.use(notFound);
app.use(errorHandler);

/**
 * =========================================================================
 * Server Start
 * =========================================================================
 */
const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`
  🚀 Server is running!
  ---------------------
  📡 URL: http://localhost:${PORT}
  🌍 Env: ${process.env.NODE_ENV || 'development'}
  `);
});
