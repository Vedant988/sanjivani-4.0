/**
 * @file adminRoutes.js
 * @description API route definitions for Admin authentication and management.
 */

import express from 'express';
import { login, logout, getMe } from '../controllers/adminController.js';
import { protect } from '../middleware/auth.js';
import { validateLogin } from '../middleware/validation.js';

const router = express.Router();

/**
 * @route POST /api/admin/login
 * @desc Authenticate admin and get token
 * @access Public
 */
router.post('/login', validateLogin, login);

// Apply authentication middleware to all routes below
router.use(protect);

/**
 * @route POST /api/admin/logout
 * @desc Log out admin and clear cookie
 * @access Private
 */
router.post('/logout', logout);

/**
 * @route GET /api/admin/me
 * @desc Get current admin user details
 * @access Private
 */
router.get('/me', getMe);

export default router;