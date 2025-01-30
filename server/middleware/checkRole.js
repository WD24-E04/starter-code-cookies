import createError from "http-errors";

const restrictTo = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role)
      throw createError(
        403,
        "Unauthorized request: You do not have the required permissions to access this resource."
      );
    next();
  };
};

export default restrictTo;
/* 
  - Here we had to return a function because we needed to pass the role dynamically while still following Express's middleware format.
  - Express middleware functions always receive (req, res, next).
  - If restrictTo didn't return a function, it would run immediately when the server starts instead of acting as middleware.
  - Returning a function ensures that the actual logic runs only when a request is made.
  - Here, restrictTo("admin") returns a function that takes (req, res, next), making it valid Express middleware.
*/
