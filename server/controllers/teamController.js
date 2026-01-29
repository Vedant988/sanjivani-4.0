/**
 * @file teamController.js
 * @description Controller functions for Team Member resources.
 * Handles CRUD operations for team members.
 */

import TeamMember from '../models/TeamMember.js';
import { asyncHandler } from '../middleware/errorHandler.js';

/**
 * Retrieves a list of team members with optional filtering.
 * 
 * Query Parameters:
 * - type: Filter by member type (Faculty, Mentor, Lead, Member).
 * - isActive: Filter by active status (default: true).
 * 
 * @route GET /api/team
 * @access Public
 */
export const getTeamMembers = asyncHandler(async (req, res) => {
  const { type, isActive = true } = req.query;

  // Build query
  const query = { isActive: isActive === 'true' };

  if (type) {
    query.type = type;
  }

  const members = await TeamMember.find(query)
    .sort({ displayOrder: 1, createdAt: 1 })
    .lean();

  res.status(200).json({
    success: true,
    data: members,
    count: members.length
  });
});

/**
 * Retrieves a single team member by their ID.
 * 
 * @route GET /api/team/:id
 * @access Public
 */
export const getTeamMember = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const member = await TeamMember.findById(id);

  if (!member) {
    return res.status(404).json({
      success: false,
      error: 'Team member not found'
    });
  }

  res.status(200).json({
    success: true,
    data: member
  });

});

/**
 * @desc    Create new team member
 * @route   POST /api/team
 * @access  Private (Admin)
 */
export const createTeamMember = asyncHandler(async (req, res) => {
  const member = await TeamMember.create(req.body);

  res.status(201).json({
    success: true,
    data: member,
    message: 'Team member created successfully'
  });
});

/**
 * @desc    Update team member
 * @route   PUT /api/team/:id
 * @access  Private (Admin)
 */
export const updateTeamMember = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const member = await TeamMember.findByIdAndUpdate(
    id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!member) {
    return res.status(404).json({
      success: false,
      error: 'Team member not found'
    });
  }

  res.status(200).json({
    success: true,
    data: member,
    message: 'Team member updated successfully'
  });
});

/**
 * @desc    Delete team member
 * @route   DELETE /api/team/:id
 * @access  Private (Admin)
 */
export const deleteTeamMember = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const member = await TeamMember.findByIdAndDelete(id);

  if (!member) {
    return res.status(404).json({
      success: false,
      error: 'Team member not found'
    });
  }

  res.status(200).json({
    success: true,
    message: 'Team member deleted successfully'
  });
});

