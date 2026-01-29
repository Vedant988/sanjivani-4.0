/**
 * @file contactRoutes.js
 * @description API route definitions for Contact Form resources.
 */

import express from 'express';
import {
  submitContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact
} from '../controllers/contactController.js';
import { protect, adminOnly } from '../middleware/auth.js';
import { validateContact, sanitizeInput } from '../middleware/validation.js';

const router = express.Router();

/**
 * @route POST /api/contact
 * @desc Submit a new contact message
 * @access Public
 */
router.post('/', /* sanitizeInput, validateContact, */ submitContact);

/**
 * @route GET /api/contact
 * @desc Get all contact messages
 * @access Private/Admin
 */
router.get('/', protect, adminOnly, getContacts);

/**
 * @route GET /api/contact/:id
 * @desc Get single contact message by ID
 * @access Private/Admin
 */
router.get('/:id', protect, adminOnly, getContact);

/**
 * @route PUT /api/contact/:id
 * @desc Update a contact message (e.g., mark as read/replied)
 * @access Private/Admin
 */
router.put('/:id', protect, adminOnly, sanitizeInput, updateContact);

/**
 * @route DELETE /api/contact/:id
 * @desc Delete a contact message
 * @access Private/Admin
 */
router.delete('/:id', protect, adminOnly, deleteContact);

export default router;

