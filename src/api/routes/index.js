/**
 * @module /routes/index.js
 * @fileOverview - This file contains the routes for the API.
 * It exports the router object that contains the route definitions.
 */
import express from 'express';

const router = express.Router();
const defaultRoutes = "/api/v1"; // Default API route

// GET request for the default route
router.get(defaultRoutes, (req, res) => {
  res.send('Welcome to the API');
});

export { router as routes };

