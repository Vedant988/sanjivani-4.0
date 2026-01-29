/**
 * @file Product.js
 * @description Mongoose schema definition for Products.
 * Represents agricultural machinery and equipment.
 */

import mongoose from 'mongoose';

/**
 * Product Schema
 * 
 * Defines the structure for product documents in the database.
 * Includes validation rules for fields like name, category, and specifications.
 * 
 * @typedef {Object} Product
 * @property {string} name - Name of the product (required, max 200 chars).
 * @property {string} category - Category of the product (required, enum: 'Planting', 'Processing', 'Other').
 * @property {string} tagline - Short description/tagline (required, max 500 chars).
 * @property {string} description - Detailed description (max 2000 chars).
 * @property {string[]} features - List of product features (at least one required).
 * @property {Object[]} specifications - Key-value pairs of technical specs.
 * @property {string[]} images - Array of image URLs.
 * @property {boolean} inStock - Availability status.
 * @property {string} slug - URL-friendly identifier (auto-generated).
 */
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    maxlength: [200, 'Product name cannot exceed 200 characters']
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
    enum: ['Planting', 'Processing', 'Other'],
    index: true // Index for faster category filtering
  },
  tagline: {
    type: String,
    required: [true, 'Product tagline is required'],
    trim: true,
    maxlength: [500, 'Tagline cannot exceed 500 characters']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  features: {
    type: [String],
    default: [],
    validate: {
      validator: function(v) {
        return v.length > 0;
      },
      message: 'At least one feature is required'
    }
  },
  specifications: {
    type: [{
      label: {
        type: String,
        required: true,
        trim: true
      },
      value: {
        type: String,
        required: true,
        trim: true
      }
    }],
    default: []
  },
  price: {
    type: String,
    required: [true, 'Product price is required'],
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  images: {
    type: [String],
    default: []
  },
  inStock: {
    type: Boolean,
    default: true,
    index: true // Index for stock filtering
  },
  stockQuantity: {
    type: Number,
    default: 0,
    min: [0, 'Stock quantity cannot be negative']
  },
  // SEO and metadata
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
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

// Generate slug from name before saving
productSchema.pre('save', function(next) {
  if (this.isModified('name') || this.isNew) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  this.updatedAt = Date.now();
  next();
});

// Index for text search
productSchema.index({ name: 'text', tagline: 'text', description: 'text' });
// Compound index for common queries
productSchema.index({ category: 1, inStock: 1 });

const Product = mongoose.model('Product', productSchema);

export default Product;

