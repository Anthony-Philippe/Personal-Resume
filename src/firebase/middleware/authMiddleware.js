import { auth } from '../config/firebase.js';

const authMiddleware = async (req, res, next) => {
  const idToken = req.headers.authorization?.split('Bearer ')[1];

  if (!idToken) {
    return res.status(401).send('Authorization token missing');
  }

  try {
    const decodedToken = await auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Error verifying ID token:', error);
    return res.status(401).send('Unauthorized');
  }
};

export default authMiddleware;
