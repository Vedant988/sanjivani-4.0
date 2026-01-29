/**
 * @file bookingRoutes.js
 * @description API route definitions for Booking/Enquiry resources.
 */

import express from 'express';
import {
  submitBooking,
  getBookings,
  getBooking,
  updateBooking,
  deleteBooking
} from '../controllers/bookingController.js';
import { protect, adminOnly } from '../middleware/auth.js';
import { validateBooking, sanitizeInput } from '../middleware/validation.js';

const router = express.Router();

/**
 * @route POST /api/bookings
 * @desc Submit a new booking/enquiry
 * @access Public
 */
router.post('/', /* sanitizeInput, validateBooking, */ submitBooking);

/**
 * @route GET /api/bookings
 * @desc Get all bookings
 * @access Private/Admin
 */
router.get('/', protect, adminOnly, getBookings);

/**
 * @route GET /api/bookings/:id
 * @desc Get single booking by ID
 * @access Private/Admin
 */
router.get('/:id', protect, adminOnly, getBooking);

/**
 * @route PUT /api/bookings/:id
 * @desc Update a booking
 * @access Private/Admin
 */
router.put('/:id', protect, adminOnly, sanitizeInput, updateBooking);

/**
 * @route DELETE /api/bookings/:id
 * @desc Delete a booking
 * @access Private/Admin
 */
router.delete('/:id', protect, adminOnly, deleteBooking);

export default router;

