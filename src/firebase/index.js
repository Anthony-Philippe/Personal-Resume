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
import xssClean from 'xss-clean';

const app = express();
const port = process.env.PORT || 5000;
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

// Routes
import { routes } from './routes.js';
app.use(routes);

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});