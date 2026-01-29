/**
 * @file auth.js
 * @description Authentication and Authorization middleware.
 * Handles JWT verification and role-based access control.
 */

import jwt from 'jsonwebtoken';
import { asyncHandler } from './errorHandler.js';

/**
 * Middleware to protect routes requiring authentication.
 * 
 * Checks for a valid JWT in the 'Authorization' header (Bearer token)
 * or in the 'token' cookie. If valid, attaches the user payload to `req.user`.
 * 
 * @function protect
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next function
 * @returns {void}
 */
export const protect = asyncHandler(
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  async (req, res, next) => {
  let token;

  // Check for token in Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  // Check for token in cookies
  if (!token && req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized to access this route'
    });
  }

  try {
    // Verify token
    const secret = process.env.JWT_SECRET || 'default_secret';
    const decoded = jwt.verify(token, secret);

    // Add user info to request
    // @ts-ignore - Adding custom property to request object
    req.user = {
      // @ts-ignore - decoded can be string or object
      id: decoded.id,
      // @ts-ignore - decoded can be string or object
      role: decoded.role || 'admin'
    };

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized to access this route'
    });
  }
});

/**
 * Middleware to restrict access to admin users only.
 * 
 * Must be used after the `protect` middleware. Checks if `req.user.role` is 'admin'.
 * 
 * @function adminOnly
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next function
 * @returns {void}
 */
export const adminOnly = (
  /** @type {import('express').Request} */ req,
  /** @type {import('express').Response} */ res,
  /** @type {import('express').NextFunction} */ next
) => {
  // @ts-ignore - Accessing custom property added in protect middleware
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({
      success: false,
      message: 'Admin access required'
    });
  }
};

/**
 * Generates a JWT token for a user.
 * 
 * @function generateToken
 * @param {string} id - User ID
 * @param {string} [role='admin'] - User role
 * @returns {string} Signed JWT token
 */
export const generateToken = (id, role = 'admin') => {
  const secret = process.env.JWT_SECRET || 'default_secret';
  // @ts-ignore - expiresIn is a valid option for jwt.sign
  return jwt.sign({ id, role }, secret, {
    expiresIn: process.env.JWT_EXPIRE || '30d'
  });
};