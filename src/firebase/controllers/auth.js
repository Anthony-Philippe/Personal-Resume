import { firebase } from "../config/firebase.js";

const verifyToken = async (req, res, next) => {
  const idToken = req.headers.authorization;
  if (!idToken) 
    return res.status(401).send("Token is missing");

  if (!idToken.startsWith("Bearer ")) 
    return res.status(401).send("Token is not formatted correctly");

  const token = idToken.split("Bearer ")[1];

  try {
    const decodedToken = await firebase.auth().verifyIdToken(token);
    console.log("Token vérifié :", decodedToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(403).send("Unauthorized");
    res.status(401).json({ message: "Invalid token" });
  }
};

export { verifyToken };

