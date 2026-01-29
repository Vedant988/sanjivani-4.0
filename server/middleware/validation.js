/**
 * @file validation.js
 * @description Input validation and sanitization middleware using express-validator.
 * Defines validation rules for various API endpoints and handles validation errors.
 */

import { body, validationResult } from 'express-validator';

/**
 * Middleware to check for validation errors.
 * 
 * If validation errors exist, responds with a 400 status and the error details.
 * Otherwise, proceeds to the next middleware.
 * 
 * @function handleValidationErrors
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next function
 * @returns {void}
 */
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array()
    });
    return;
  }
  next();
};

/**
 * Validation chain for the Contact Form submission.
 * Validates name, email, phone, subject, and message fields.
 */
export const validateContact = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces'),

  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),

  body('phone')
    .optional()
    .isMobilePhone('any')
    .withMessage('Please provide a valid phone number'),

  body('subject')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Subject must be between 5 and 200 characters'),

  body('message')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters'),

  handleValidationErrors
];

/**
 * Validation rules for booking form
 */
export const validateBooking = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces'),

  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),

  body('phone')
    .isLength({ min: 10, max: 15 })
    .withMessage('Phone number must be between 10 and 15 characters')
    .matches(/^[\+]?[0-9\s\-\(\)]+$/)
    .withMessage('Please provide a valid phone number'),

  body('organization')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('Organization name cannot exceed 200 characters'),

  body('type')
    .isIn(['engineer', 'product_enquiry', 'consultation', 'other'])
    .withMessage('Invalid booking type'),

  body('department')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('Department cannot exceed 100 characters'),

  body('preferredDate')
    .optional()
    .custom((value) => {
      if (!value) return true; // Allow empty values
      // Check if it's a valid ISO date string
      const date = new Date(value);
      if (isNaN(date.getTime())) {
        throw new Error('Please provide a valid date');
      }
      // Check if date is not in the past
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      if (date < now) {
        throw new Error('Preferred date cannot be in the past');
      }
      return true;
    }),

  body('timeSlot')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Time slot cannot exceed 50 characters'),

  body('purpose')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Purpose must be between 10 and 1000 characters'),

  body('productId')
    .optional()
    .isMongoId()
    .withMessage('Invalid product ID'),

  body('productName')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('Product name cannot exceed 200 characters'),

  handleValidationErrors
];

/**
 * Validation chain for Admin Login.
 * Validates email and password fields.
 */
export const validateLogin = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),

  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),

  handleValidationErrors
];

/**
 * Middleware to sanitize input to prevent XSS attacks.
 * Recursively cleans string values in req.body, req.query, and req.params.
 * 
 * @function sanitizeInput
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next function
 * @returns {void}
 */
export const sanitizeInput = (req, res, next) => {
  // Recursively sanitize object properties
  /** @param {any} obj */
  const sanitize = (obj) => {
    for (let key in obj) {
      if (typeof obj[key] === 'string') {
        // Remove potentially dangerous HTML/script tags
        obj[key] = obj[key].replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
        obj[key] = obj[key].replace(/<[^>]*>/g, ''); // Remove all HTML tags
        obj[key] = obj[key].trim();
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        sanitize(obj[key]);
      }
    }
  };

  if (req.body) sanitize(req.body);
  if (req.query) sanitize(req.query);
  if (req.params) sanitize(req.params);

  next();
};