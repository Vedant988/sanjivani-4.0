/**
 * @file adminController.js
 * @description Controller functions for Admin authentication.
 * Handles login, logout, and retrieving current admin status.
 */

import bcrypt from 'bcryptjs';
import { generateToken } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/errorHandler.js';

/**
 * Authenticates an admin user.
 * 
 * Validates email and password against environment variables (for now).
 * Generates a JWT token and sets it as an httpOnly cookie.
 * 
 * @route POST /api/admin/login
 * @access Public
 */
export const login = asyncHandler(
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Please provide email and password'
    });
  }

  // Check admin credentials (in production, this should be in database)
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    return res.status(500).json({
      success: false,
      message: 'Admin credentials not configured'
    });
  }

  // Verify credentials
  if (email !== adminEmail) {
    return res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }

  // For now, use plain text comparison (in production, hash passwords)
  // TODO: Implement proper password hashing
  const isMatch = password === adminPassword;

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }

  // Generate token
  const token = generateToken('admin', 'admin');

  // Set httpOnly cookie
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
  });

  res.status(200).json({
    success: true,
    message: 'Login successful',
    data: {
      token,
      user: {
        id: 'admin',
        role: 'admin',
        email: adminEmail
      }
    }
  });
});

/**
 * Logs out the admin user.
 * 
 * Clears the authentication cookie.
 * 
 * @route POST /api/admin/logout
 * @access Private
 */
export const logout = asyncHandler(
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async (req, res) => {
  // Clear the cookie
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(0)
  });

  res.status(200).json({
    success: true,
    message: 'Logged out successfully'
  });
});

/**
 * Retrieves current admin user details.
 * 
 * @route GET /api/admin/me
 * @access Private
 */
export const getMe = asyncHandler(
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      user: {
        // @ts-ignore - user property added by auth middleware
        id: req.user.id,
        // @ts-ignore - user property added by auth middleware
        role: req.user.role,
        email: process.env.ADMIN_EMAIL
      }
    }
  });
});