import mongoose from 'mongoose';

/**
 * Contact Message Schema
 * Stores contact form submissions from the website
 */
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    index: true // Index for email lookups
  },
  phone: {
    type: String,
    trim: true
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    trim: true,
    maxlength: [200, 'Subject cannot exceed 200 characters']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [5000, 'Message cannot exceed 5000 characters']
  },
  // Status tracking
  status: {
    type: String,
    enum: ['new', 'read', 'replied', 'archived'],
    default: 'new',
    index: true
  },
  // Response tracking
  repliedAt: {
    type: Date
  },
  replyMessage: {
    type: String,
    trim: true
  },
  // IP address for spam prevention (optional)
  ipAddress: {
    type: String,
    trim: true
  },
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now,
    index: true // Index for date-based queries
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Update timestamp on save
contactSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Index for status and date queries
contactSchema.index({ status: 1, createdAt: -1 });

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;

