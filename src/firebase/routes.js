/**
 * @module /routes/index.js
 * @fileOverview - This file contains the routes for the API.
 * It exports the router object that contains the route definitions.
 */
import express from 'express';

const router = express.Router();

import { verifyToken } from './controllers/auth.js';

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "Accès autorisé", user: req.user });
});

export { router as routes };

