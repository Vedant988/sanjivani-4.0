/**
 * @file projectRoutes.js
 * @description API route definitions for Project resources.
 */

import express from 'express';
import {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject
} from '../controllers/projectController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = express.Router();

/**
 * @route GET /api/projects
 * @desc Get all projects
 * @access Public
 */
router.get('/', getProjects);

/**
 * @route GET /api/projects/:id
 * @desc Get single project by ID
 * @access Public
 */
router.get('/:id', getProject);

/**
 * @route POST /api/projects
 * @desc Create a new project
 * @access Private/Admin
 */
router.post('/', protect, adminOnly, createProject);

/**
 * @route PUT /api/projects/:id
 * @desc Update a project
 * @access Private/Admin
 */
router.put('/:id', protect, adminOnly, updateProject);

/**
 * @route DELETE /api/projects/:id
 * @desc Delete a project
 * @access Private/Admin
 */
router.delete('/:id', protect, adminOnly, deleteProject);

export default router;

