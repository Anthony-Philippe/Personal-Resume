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

// Routes
/*import { routes } from './routes.js';
app.use(routes);*/

import jwt from 'jsonwebtoken';
import { db, firebase } from './config/firebase.js';

const JWT_secret = 'xzi1M9fnKIUAXm8cQaq7hNvGjDOO8DZBxQ'

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

app.post('/generate-otp', async (req, res) => {
  const { email, uid } = req.body;
  const otp = generateOTP();
  const token = jwt.sign({ email, uid, otp }, JWT_secret, { expiresIn: '10m' });

  await db.collection('otps').doc(uid).set({
    otp,
    token,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });

  console.log(`OTP for ${email}: ${otp}`);

  res.send({ message: 'OTP generated and sent to user', token });
});

app.post('/verify-otp', async (req, res) => {
  const { uid, otp } = req.body;
  const token = req.headers.authorization.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_secret);
    const doc = await db.collection('otps').doc(uid).get();

    if (!doc.exists) {
      return res.status(400).send({ error: 'Invalid OTP or expired' });
    }

    const data = doc.data();

    if (data.otp === otp) {
      await db.collection('otps').doc(uid).delete();
      return res.send({ message: 'OTP verified successfully' });
    } else {
      return res.status(400).send({ error: 'Invalid OTP' });
    }
  } catch (error) {
    return res.status(400).send({ error: 'Invalid token or token expired' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});