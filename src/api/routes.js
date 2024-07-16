/**
 * @module /routes/index.js
 * @fileOverview - This file contains the routes for the API.
 * It exports the router object that contains the route definitions.
 */
import express from 'express';
import { getContentById } from './controllers/dataController.js';
import { ApiEntryDoc } from './controllers/entry.js';

const router = express.Router();
const defaultRoutes = "/api/v1"; // Default API route

// GET request for the default route
router.get(defaultRoutes, (req, res) => {
  res.send(ApiEntryDoc);
});

router.get(`${defaultRoutes}/content/:id`, getContentById);

export { router as routes };

