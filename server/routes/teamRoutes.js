/**
 * @file teamRoutes.js
 * @description API route definitions for Team Member resources.
 */

import express from 'express';
import {
  getTeamMembers,
  getTeamMember,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember
} from '../controllers/teamController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = express.Router();

/**
 * @route GET /api/team
 * @desc Get all team members
 * @access Public
 */
router.get('/', getTeamMembers);

/**
 * @route GET /api/team/:id
 * @desc Get single team member by ID
 * @access Public
 */
router.get('/:id', getTeamMember);

/**
 * @route POST /api/team
 * @desc Create a new team member
 * @access Private/Admin
 */
router.post('/', protect, adminOnly, createTeamMember);

/**
 * @route PUT /api/team/:id
 * @desc Update a team member
 * @access Private/Admin
 */
router.put('/:id', protect, adminOnly, updateTeamMember);

/**
 * @route DELETE /api/team/:id
 * @desc Delete a team member
 * @access Private/Admin
 */
router.delete('/:id', protect, adminOnly, deleteTeamMember);

export default router;

