/**
 * @module app.js
 * @fileoverview The app.js file is the entry point for the API.
 * It sets up the express server, configures middleware, and listens on a specified port
 * It configures middleware such as body-parser, cors, helmet, rate-limit, xss-clean, and hpp.
 * It also serves static files and sets up error handling middleware.
 */
import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import hpp from 'hpp';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import xssClean from 'xss-clean';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;
config();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15  minutes
  max: 100,
  message: 'Too many requests !'
});

app.use(limiter);
app.use(xssClean());
app.use(hpp());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'sha256-HqcrltV/add35ktFKnghPtUZD86xFk2tNSOVuSxlxZI='"]
    }
  }
}));

// Local middleware
import errorHandler from './middleware/error-handler.js';
app.use(errorHandler);

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/v1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'documentation.html'));
});

// Routes
import { routes } from './routes.js';
app.use(routes);

// Listen on port 3000
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}/api/v1`);
});