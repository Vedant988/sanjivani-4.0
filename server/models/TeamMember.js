import mongoose from 'mongoose';

/**
 * Team Member Schema
 * Represents faculty, mentors, team leads, and members of Team Sanjivani 4.0
 */
const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  role: {
    type: String,
    required: [true, 'Role is required'],
    trim: true,
    maxlength: [100, 'Role cannot exceed 100 characters']
  },
  type: {
    type: String,
    required: [true, 'Member type is required'],
    enum: ['Faculty', 'Mentor', 'Lead', 'Member'],
    index: true // Index for filtering by type
  },
  department: {
    type: String,
    trim: true,
    maxlength: [100, 'Department cannot exceed 100 characters']
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
  },
  phone: {
    type: String,
    trim: true
  },
  linkedin: {
    type: String,
    trim: true,
    match: [/^https?:\/\/(www\.)?linkedin\.com\/in\/.+/, 'Please provide a valid LinkedIn URL']
  },
  photo: {
    type: String,
    trim: true
  },
  bio: {
    type: String,
    trim: true,
    maxlength: [1000, 'Bio cannot exceed 1000 characters']
  },
  // Ordering for display (lower numbers appear first)
  displayOrder: {
    type: Number,
    default: 999
  },
  // Status for soft deletion or hiding
  isActive: {
    type: Boolean,
    default: true,
    index: true
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
teamMemberSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Indexes for common queries
teamMemberSchema.index({ type: 1, displayOrder: 1 });
teamMemberSchema.index({ isActive: 1, type: 1 });

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

export default TeamMember;

