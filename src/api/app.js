/**
 * The app.js file is the entry point for the API.
 * It sets up the express server, configures middleware, and listens on a specified port
 * It configures middleware such as body-parser, cors, helmet, rate-limit, xss-clean, and hpp.
 * It requires the routes file and sets up the API routes.
 * It listens on a specified port and logs a message when the server is running. 
 */

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const xssClean = require('xss-clean');
const hpp = require('hpp');
const dotenv = require('dotenv');

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: 'Too many requests !'
});

app.use(limiter);
app.use(xssClean());
app.use(hpp());
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

const routes = require('./config/routes');
app.use('/api/v1/', routes);

// listen on port 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});