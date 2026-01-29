import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

/**
 * @file database.js
 * @description Configuration and connection logic for MongoDB using Mongoose.
 * Handles connection establishment, error logging, and graceful shutdowns.
 */

/**
 * Establishes a connection to the MongoDB database.
 * 
 * This function handles:
 * 1. Parsing and validating the MONGODB_URI.
 * 2. Ensuring a default database name ('sanjivani_prod') is present if missing.
 * 3. Connecting to the database using Mongoose.
 * 4. Setting up event listeners for connection errors and disconnections.
 * 5. Configuring graceful shutdown on SIGINT.
 * 
 * @async
 * @returns {Promise<void>}
 */
const connectDB = async () => {
  try {
    let mongoUri = process.env.MONGODB_URI;
    
    if (!mongoUri) {
      throw new Error('MONGODB_URI environment variable is not defined');
    }

    // Ensure database name is specified (use 'sanjivani_prod' as default for production)
    // MongoDB URI format: mongodb+srv://user:pass@cluster.mongodb.net/database?options
    // Check if database name exists between the last / and ?
    const dbNameMatch = mongoUri.match(/mongodb\+srv:\/\/[^/]+\/([^?]+)/);
    
    if (!dbNameMatch || dbNameMatch[1].trim() === '') {
      // No database name found, add 'sanjivani_prod' before query parameters
      // Handle case where URI has /? (no database name)
      if (mongoUri.includes('/?')) {
        // Replace /? with /sanjivani_prod?
        mongoUri = mongoUri.replace('/?', '/sanjivani_prod?');
      } else if (mongoUri.includes('?')) {
        // Has ? but no / before it, add /sanjivani_prod before ?
        mongoUri = mongoUri.replace('?', '/sanjivani_prod?');
      } else if (mongoUri.endsWith('/')) {
        // If ends with /, just add sanjivani_prod
        mongoUri = mongoUri + 'sanjivani_prod';
      } else {
        // Add /sanjivani_prod
        mongoUri = mongoUri + '/sanjivani_prod';
      }
    }
    
    const conn = await mongoose.connect(mongoUri);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
    
    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('⚠️  MongoDB disconnected');
    });

    // Graceful shutdown
    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      console.log('MongoDB connection closed through app termination');
      process.exit(0);
    });

  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    
    // Provide helpful error message for common issues
    if (error.message.includes('IP') || error.message.includes('whitelist')) {
      console.error('\n📋 To fix this issue:');
      console.error('1. Go to MongoDB Atlas: https://cloud.mongodb.com/');
      console.error('2. Navigate to: Network Access → Add IP Address');
      console.error('3. Add your current IP or use 0.0.0.0/0 for development (less secure)');
      console.error('4. Wait 1-2 minutes for changes to propagate\n');
    }
    
    // Don't exit immediately - allow server to start but warn about DB issues
    // The server will still run, but database operations will fail
    console.warn('⚠️  Server will continue running, but database operations will fail until connection is established.');
  }
};

export default connectDB;

