import mongoose from 'mongoose';

/**
 * Project Schema
 * Represents SAE TIFAN projects and competitions participated by Team Sanjivani 4.0
 */
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  year: {
    type: String,
    required: [true, 'Project year is required'],
    trim: true,
    index: true // Index for year-based filtering
  },
  status: {
    type: String,
    required: [true, 'Project status is required'],
    enum: ['Current', 'Completed', 'Upcoming'],
    default: 'Completed',
    index: true
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true,
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  achievements: {
    type: [String],
    default: []
  },
  images: {
    type: [String],
    default: []
  },
  competition: {
    type: String,
    trim: true,
    maxlength: [200, 'Competition name cannot exceed 200 characters']
  },
  location: {
    type: String,
    trim: true
  },
  // Project metadata
  features: {
    type: [String],
    default: []
  },
  technologies: {
    type: [String],
    default: []
  },
  // Team information
  captain: {
    type: String,
    trim: true
  },
  viceCaptain: {
    type: String,
    trim: true
  },
  // Display ordering
  displayOrder: {
    type: Number,
    default: 0
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

// Update timestamp on save
projectSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Indexes for common queries
projectSchema.index({ status: 1, year: -1 });
projectSchema.index({ displayOrder: -1 });

const Project = mongoose.model('Project', projectSchema);

export default Project;

