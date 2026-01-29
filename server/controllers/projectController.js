/**
 * @file projectController.js
 * @description Controller functions for Project resources.
 * Handles CRUD operations for team projects.
 */

import Project from '../models/Project.js';
import { asyncHandler } from '../middleware/errorHandler.js';

/**
 * Retrieves a list of projects with optional filtering.
 * 
 * Query Parameters:
 * - status: Filter by project status (Current, Completed, Upcoming).
 * - year: Filter by project year.
 * 
 * @route GET /api/projects
 * @access Public
 */
export const getProjects = asyncHandler(async (req, res) => {
  const { status, year } = req.query;

  // Build query
  const query = {};

  if (status) {
    query.status = status;
  }

  if (year) {
    query.year = year;
  }

  const projects = await Project.find(query)
    .sort({ displayOrder: -1, year: -1, createdAt: -1 })
    .lean();

  res.status(200).json({
    success: true,
    data: projects,
    count: projects.length
  });
});

/**
 * Retrieves a single project by its ID.
 * 
 * @route GET /api/projects/:id
 * @access Public
 */
export const getProject = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const project = await Project.findById(id);

  if (!project) {
    return res.status(404).json({
      success: false,
      error: 'Project not found'
    });
  }

  res.status(200).json({
    success: true,
    data: project
  });
});

/**
 * @desc    Create new project
 * @route   POST /api/projects
 * @access  Private (Admin)
 */
export const createProject = asyncHandler(async (req, res) => {
  const project = await Project.create(req.body);

  res.status(201).json({
    success: true,
    data: project,
    message: 'Project created successfully'
  });
});

/**
 * @desc    Update project
 * @route   PUT /api/projects/:id
 * @access  Private (Admin)
 */
export const updateProject = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const project = await Project.findByIdAndUpdate(
    id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!project) {
    return res.status(404).json({
      success: false,
      error: 'Project not found'
    });
  }

  res.status(200).json({
    success: true,
    data: project,
    message: 'Project updated successfully'
  });
});

/**
 * @desc    Delete project
 * @route   DELETE /api/projects/:id
 * @access  Private (Admin)
 */
export const deleteProject = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const project = await Project.findByIdAndDelete(id);

  if (!project) {
    return res.status(404).json({
      success: false,
      error: 'Project not found'
    });
  }

  res.status(200).json({
    success: true,
    message: 'Project deleted successfully'
  });
});

