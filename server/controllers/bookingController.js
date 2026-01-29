// @ts-nocheck
/**
 * @file bookingController.js
 * @description Controller functions for Booking/Enquiry resources.
 * Handles submission, retrieval, and management of bookings.
 */

import Booking from '../models/Booking.js';
import { asyncHandler } from '../middleware/errorHandler.js';

/**
 * Submits a new booking or enquiry.
 * 
 * Captures the client's IP address and creates a new booking record.
 * 
 * @route POST /api/bookings
 * @access Public
 */
export const submitBooking = asyncHandler(async (req, res) => {
  // Get IP address if available
  const ipAddress = req.ip || req.connection.remoteAddress || 'unknown';

  const bookingData = {
    ...req.body,
    ipAddress
  };

  const booking = await Booking.create(bookingData);

  res.status(201).json({
    success: true,
    data: booking,
    message: 'Booking request submitted successfully! We will confirm your appointment soon.'
  });
});

/**
 * Retrieves a list of bookings with optional filtering and pagination.
 * 
 * Query Parameters:
 * - status: Filter by booking status (pending, confirmed, etc.).
 * - type: Filter by booking type (engineer, product_enquiry, etc.).
 * - page: Page number (default: 1).
 * - limit: Items per page (default: 20).
 * 
 * @route GET /api/bookings
 * @access Private/Admin
 */
export const getBookings = asyncHandler(async (req, res) => {
  const { status, type, page = 1, limit = 20 } = req.query;

  // Build query
  const query = {};

  if (status) {
    query.status = status;
  }

  if (type) {
    query.type = type;
  }

  // Pagination
  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);
  const skip = (pageNum - 1) * limitNum;

  const bookings = await Booking.find(query)
    .populate('productId', 'name image')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limitNum)
    .lean();

  const total = await Booking.countDocuments(query);

  res.status(200).json({
    success: true,
    data: bookings,
    pagination: {
      page: pageNum,
      limit: limitNum,
      total,
      pages: Math.ceil(total / limitNum)
    }
  });
});

/**
 * @desc    Get single booking
 * @route   GET /api/bookings/:id
 * @access  Private (Admin)
 */
export const getBooking = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const booking = await Booking.findById(id)
    .populate('productId', 'name image price');

  if (!booking) {
    return res.status(404).json({
      success: false,
      error: 'Booking not found'
    });
  }

  res.status(200).json({
    success: true,
    data: booking
  });
});

/**
 * @desc    Update booking status
 * @route   PUT /api/bookings/:id
 * @access  Private (Admin)
 */
export const updateBooking = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const updateData = { ...req.body };

  // If confirming, set confirmedAt timestamp
  if (status === 'confirmed' && !updateData.confirmedAt) {
    updateData.confirmedAt = new Date();
  }

  const booking = await Booking.findByIdAndUpdate(
    id,
    updateData,
    {
      new: true,
      runValidators: true
    }
  ).populate('productId', 'name image');

  if (!booking) {
    return res.status(404).json({
      success: false,
      error: 'Booking not found'
    });
  }

  res.status(200).json({
    success: true,
    data: booking,
    message: 'Booking updated successfully'
  });
});

/**
 * @desc    Delete booking
 * @route   DELETE /api/bookings/:id
 * @access  Private (Admin)
 */
export const deleteBooking = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const booking = await Booking.findByIdAndDelete(id);

  if (!booking) {
    return res.status(404).json({
      success: false,
      error: 'Booking not found'
    });
  }

  res.status(200).json({
    success: true,
    message: 'Booking deleted successfully'
  });
});

