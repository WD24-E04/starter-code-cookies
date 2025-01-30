import createError from "http-errors";

export const routeNotFound = () => {
  throw createError(404, "Page was not found");
};

export const globalErrorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    statusCode: err.status || 500,
    message: err.message,
    stack: err.stack,
  });
};
/* 
  - Express Middleware Signature needs (err, req, res, next) to be recognized as an error handler.
  - Express automatically forwards errors to middleware with four parameters.
  - This also allows chaining multiple error handlers if needed.
  - Omitting next breaks Express’s error-handling behavior.
*/
