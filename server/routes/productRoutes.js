/**
 * @file productRoutes.js
 * @description API route definitions for Product resources.
 * Maps HTTP methods to controller functions and applies authentication middleware.
 */

import express from 'express';
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = express.Router();

/**
 * @route GET /api/products
 * @desc Get all products
 * @access Public
 */
router.get('/', getProducts);

/**
 * @route GET /api/products/:id
 * @desc Get single product by ID
 * @access Public
 */
router.get('/:id', getProduct);

/**
 * @route POST /api/products
 * @desc Create a new product
 * @access Private/Admin
 */
router.post('/', protect, adminOnly, createProduct);

/**
 * @route PUT /api/products/:id
 * @desc Update a product
 * @access Private/Admin
 */
router.put('/:id', protect, adminOnly, updateProduct);

/**
 * @route DELETE /api/products/:id
 * @desc Delete a product
 * @access Private/Admin
 */
router.delete('/:id', protect, adminOnly, deleteProduct);

export default router;

