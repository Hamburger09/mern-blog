import jwt from "jsonwebtoken";
import errorHandler from "./error.js";

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
      return next(errorHandler(401, "Unauthorized"));
      }
      try {
          jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
              if (err) {
          console.log(err)
        return next(errorHandler(401, "Unauthorized"));
      }
      req.user = user;
      next();
    });
  } catch (err) {
    return next(errorHandler(400, "Invalid token"));
  }
};

export default verifyToken