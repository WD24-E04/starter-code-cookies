import jwt from "jsonwebtoken";
import User from "../models/User.js";
import createError from "http-errors";

const checkToken = async (req, res, next) => {
  try {
    const jwtToken = req.headers.authorization?.split(" ")[1];

    if (!jwtToken) throw createError(401, "Unauthorized request");

    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
    const user = await User.findOne({ email: decoded.email });
    /* 
      - After decoding the token, the decoded object contains user-related data that was originally included when the token was created during login.
        In our case, this data includes the email (decoded.email).
      - The above code searches the database for a user with the extracted email.
      - The result is either the matching user object or null if no user is found.
    */
    if (!user) throw createError(401, "User is no longer exist");

    req.user = user;
    /*
      We can modify the request object by adding additional information to it. 
      Since the request is a standard object, we can add extra properties as needed. 
      In this case, we can attach a user object to the request. 
      As the request moves through the middleware, subsequent middleware functions will have access to req.user. 
      In the following middlerware this allows us to check the user's role, such as verifying whether the user is an admin using req.user.role.
    */

    next();
  } catch (error) {
    next(error);
  }
};

export default checkToken;
