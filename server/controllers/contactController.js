// @ts-nocheck
/**
 * @file contactController.js
 * @description Controller functions for Contact Form resources.
 * Handles submission and management of contact messages.
 */

import Contact from '../models/Contact.js';
import { asyncHandler } from '../middleware/errorHandler.js';

/**
 * Submits a new contact message.
 * 
 * Captures the client's IP address and creates a new contact record.
 * 
 * @route POST /api/contact
 * @access Public
 */
export const submitContact = asyncHandler(async (req, res) => {
  // Get IP address if available
  const ipAddress = req.ip || req.connection.remoteAddress || 'unknown';

  const contactData = {
    ...req.body,
    ipAddress
  };

  console.log('Contact data to save:', contactData);

  try {
    const contact = await Contact.create(contactData);
    console.log('Contact created:', contact);

    res.status(201).json({
      success: true,
      data: contact,
      message: 'Contact message submitted successfully! We will get back to you soon.'
    });
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
});

/**
 * Retrieves a list of contact messages with optional filtering and pagination.
 * 
 * Query Parameters:
 * - status: Filter by message status (new, read, replied, archived).
 * - page: Page number (default: 1).
 * - limit: Items per page (default: 20).
 * 
 * @route GET /api/contact
 * @access Private/Admin
 */
export const getContacts = asyncHandler(async (req, res) => {
  const { status, page = 1, limit = 20 } = req.query;

  // Build query
  const query = {};

  if (status) {
    query.status = status;
  }

  // Pagination
  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);
  const skip = (pageNum - 1) * limitNum;

  const contacts = await Contact.find(query)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limitNum)
    .lean();

  const total = await Contact.countDocuments(query);

  res.status(200).json({
    success: true,
    data: contacts,
    pagination: {
      page: pageNum,
      limit: limitNum,
      total,
      pages: Math.ceil(total / limitNum)
    }
  });
});

/**
 * @desc    Get single contact message
 * @route   GET /api/contact/:id
 * @access  Private (Admin)
 */
export const getContact = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const contact = await Contact.findById(id);

  if (!contact) {
    return res.status(404).json({
      success: false,
      error: 'Contact message not found'
    });
  }

  res.status(200).json({
    success: true,
    data: contact
  });
});

/**
 * @desc    Update contact status (mark as read, replied, etc.)
 * @route   PUT /api/contact/:id
 * @access  Private (Admin)
 */
export const updateContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status, replyMessage } = req.body;

  const updateData = { ...req.body };

  // If marking as replied, set repliedAt timestamp
  if (status === 'replied' && !updateData.repliedAt) {
    updateData.repliedAt = new Date();
  }

  const contact = await Contact.findByIdAndUpdate(
    id,
    updateData,
    {
      new: true,
      runValidators: true
    }
  );

  if (!contact) {
    return res.status(404).json({
      success: false,
      error: 'Contact message not found'
    });
  }

  res.status(200).json({
    success: true,
    data: contact,
    message: 'Contact updated successfully'
  });
});

/**
 * @desc    Delete contact message
 * @route   DELETE /api/contact/:id
 * @access  Private (Admin)
 */
export const deleteContact = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const contact = await Contact.findByIdAndDelete(id);

  if (!contact) {
    return res.status(404).json({
      success: false,
      error: 'Contact message not found'
    });
  }

  res.status(200).json({
    success: true,
    message: 'Contact message deleted successfully'
  });
});

