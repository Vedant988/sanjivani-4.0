/**
 * @file server.js
 * @description Main entry point for the Team Sanjivani 4.0 Backend API.
 * Configures Express server, middleware, database connection, and routes.
 */

// Initialize Sentry (must be first)
// import * as Sentry from '@sentry/node';
// import pkg from '@sentry/profiling-node';
// const { nodeProfilingIntegration } = pkg;

// const { expressIntegration } = Sentry;

// Sentry.init({
//   dsn: process.env.SENTRY_DSN,
//   integrations: [
//     // Add profiling integration
//     // nodeProfilingIntegration(),
//   ],
//   // Performance Monitoring
//   tracesSampleRate: 1.0, // Capture 100% of the transactions
//   // Set sampling rate for profiling - this is relative to tracesSampleRate
//   profilesSampleRate: 1.0,
//   environment: process.env.NODE_ENV || 'development',
//   sendDefaultPii: true,
// });

import express from 'express';
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
 * Middleware Configuration
 */

// Security middleware (Helmet)
// Sets various HTTP headers to secure the app
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'"],
      connectSrc: ["'self'", process.env.SENTRY_DSN ? "https://*.sentry.io" : ""].filter(Boolean)
    }
  },
  hsts: {
    maxAge: 31536000, // 1 year
    includeSubDomains: true,
    preload: true
  }
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false
});
app.use('/api/', limiter);

// Stricter rate limiting for auth routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 login attempts per windowMs
  message: {
    success: false,
    message: 'Too many login attempts, please try again later.'
  }
});

// CORS configuration - PRODUCTION SECURE
const allowedOrigins = [
  process.env.FRONTEND_URL, // Production domain only
  process.env.ADMIN_URL, // Admin panel domain if different
  // Allow localhost for development
  'http://localhost:5173', // Vite dev server
  'http://localhost:3000', // Alternative dev port
  'http://127.0.0.1:5173',
  'http://127.0.0.1:3000'
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    // In development, allow all origins temporarily
    if (process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('CORS blocked origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// Sentry request handler (must be after body parsing)
// app.use(expressIntegration({
//   shouldCreateTransactionForRequest: (req) => {
//     // Don't create transactions for health checks
//     return req.url !== '/api/health';
//   }
// }));

// Request logging middleware (simple)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Health check endpoints
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Readiness probe - checks if app can serve traffic
app.get('/api/health/ready', async (req, res) => {
  try {
    // Check database connection
    const dbState = mongoose.connection.readyState;
    const isDbReady = dbState === 1; // 1 = connected

    if (isDbReady) {
      res.status(200).json({
        success: true,
        message: 'Service is ready',
        database: 'connected',
        timestamp: new Date().toISOString()
      });
    } else {
      res.status(503).json({
        success: false,
        message: 'Service not ready - database disconnected',
        database: 'disconnected',
        timestamp: new Date().toISOString()
      });
    }
  } catch (error) {
    res.status(503).json({
      success: false,
      message: 'Service not ready',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Liveness probe - checks if app is running
app.get('/api/health/live', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Service is alive',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/admin', authLimiter, adminRoutes); // Apply stricter rate limiting to admin routes

// 404 handler
app.use(notFound);

// Sentry error handler (must be before custom error handler)
// app.use(Sentry.expressErrorHandler());

// Error handler (must be last)
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
});

