/**
 * @file productController.js
 * @description Controller functions for Product resources.
 * Handles CRUD operations for products, including filtering, searching, and pagination.
 */

import Product from '../models/Product.js';
import { asyncHandler } from '../middleware/errorHandler.js';

/**
 * Retrieves a list of products with optional filtering, searching, and pagination.
 * 
 * Query Parameters:
 * - category: Filter by product category.
 * - inStock: Filter by availability (true/false).
 * - search: Text search query.
 * - page: Page number (default: 1).
 * - limit: Items per page (default: 20).
 * 
 * @route GET /api/products
 * @access Public
 */
export const getProducts = asyncHandler(async (req, res) => {
  const { category, inStock, search, page = 1, limit = 20 } = req.query;

  // Build query
  const query = {};

  if (category && category !== 'All') {
    query.category = category;
  }

  if (inStock !== undefined) {
    query.inStock = inStock === 'true';
  }

  // Text search
  if (search) {
    query.$text = { $search: search };
  }

  // Pagination
  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);
  const skip = (pageNum - 1) * limitNum;

  // Execute query
  const products = await Product.find(query)
    .sort(search ? { score: { $meta: 'textScore' } } : { createdAt: -1 })
    .skip(skip)
    .limit(limitNum)
    .lean();

  const total = await Product.countDocuments(query);

  res.status(200).json({
    success: true,
    data: products,
    pagination: {
      page: pageNum,
      limit: limitNum,
      total,
      pages: Math.ceil(total / limitNum)
    }
  });
});

/**
 * @desc    Get single product by ID or slug
 * @route   GET /api/products/:id
 * @access  Public
 */
export const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Check if id is ObjectId or slug
  const isObjectId = /^[0-9a-fA-F]{24}$/.test(id);
  const query = isObjectId ? { _id: id } : { slug: id };

  const product = await Product.findOne(query);

  if (!product) {
    return res.status(404).json({
      success: false,
      error: 'Product not found'
    });
  }

  res.status(200).json({
    success: true,
    data: product
  });
});

/**
 * @desc    Create new product
 * @route   POST /api/products
 * @access  Private (Admin - implement auth later)
 */
export const createProduct = asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    data: product,
    message: 'Product created successfully'
  });
});

/**
 * @desc    Update product
 * @route   PUT /api/products/:id
 * @access  Private (Admin)
 */
export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByIdAndUpdate(
    id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!product) {
    return res.status(404).json({
      success: false,
      error: 'Product not found'
    });
  }

  res.status(200).json({
    success: true,
    data: product,
    message: 'Product updated successfully'
  });
});

/**
 * @desc    Delete product
 * @route   DELETE /api/products/:id
 * @access  Private (Admin)
 */
export const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByIdAndDelete(id);

  if (!product) {
    return res.status(404).json({
      success: false,
      error: 'Product not found'
    });
  }

  res.status(200).json({
    success: true,
    message: 'Product deleted successfully'
  });
});

