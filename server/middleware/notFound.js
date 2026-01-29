/**
 * @file notFound.js
 * @description Middleware to handle 404 Not Found errors.
 */

/**
 * Middleware to handle requests to non-existent routes.
 * 
 * Responds with a 404 status code and a JSON error message indicating
 * that the requested endpoint does not exist.
 * 
 * @function notFound
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next function
 * @returns {void}
 */
export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404).json({
    success: false,
    error: 'Route not found',
    message: `The requested endpoint ${req.originalUrl} does not exist`
  });
};

