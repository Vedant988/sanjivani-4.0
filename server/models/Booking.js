import mongoose from 'mongoose';

/**
 * Booking/Enquiry Schema
 * Stores engineer booking requests and product enquiries
 */
const bookingSchema = new mongoose.Schema({
  // Contact Information
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
    index: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  organization: {
    type: String,
    trim: true,
    maxlength: [200, 'Organization name cannot exceed 200 characters']
  },
  // Booking Details
  type: {
    type: String,
    required: [true, 'Booking type is required'],
    enum: ['engineer', 'product_enquiry', 'consultation', 'other'],
    default: 'engineer',
    index: true
  },
  department: {
    type: String,
    trim: true,
    maxlength: [100, 'Department cannot exceed 100 characters']
  },
  // Date and Time (for engineer bookings)
  preferredDate: {
    type: Date
  },
  timeSlot: {
    type: String,
    trim: true
  },
  // Purpose/Message
  purpose: {
    type: String,
    required: [true, 'Purpose is required'],
    trim: true,
    maxlength: [2000, 'Purpose cannot exceed 2000 characters']
  },
  // Product reference (if booking is product-related)
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  productName: {
    type: String,
    trim: true
  },
  // Status tracking
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending',
    index: true
  },
  // Admin notes
  adminNotes: {
    type: String,
    trim: true,
    maxlength: [1000, 'Admin notes cannot exceed 1000 characters']
  },
  // Confirmation details
  confirmedAt: {
    type: Date
  },
  confirmedBy: {
    type: String,
    trim: true
  },
  // IP address for tracking
  ipAddress: {
    type: String,
    trim: true
  },
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
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
bookingSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Indexes for common queries
bookingSchema.index({ status: 1, createdAt: -1 });
bookingSchema.index({ type: 1, status: 1 });
bookingSchema.index({ email: 1, createdAt: -1 });

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;

