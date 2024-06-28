import jwt from 'jsonwebtoken';
import { errorHandler } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
  // Extract token from cookies
  const token = req.cookies.access_token;
  
  // If no token is found, return an unauthorized error
  if (!token) {
    return next(errorHandler(401, 'Unauthorized'));
  }

  // Verify the token using the secret key
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, 'Unauthorized'));
    }
    
    // Attach the user information to the request object
    req.user = user;
    next();
  });
};
