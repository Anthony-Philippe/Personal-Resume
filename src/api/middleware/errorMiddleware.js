/**
 * Error middleware
 * @param {*} err, req, res, next
 * @returns JSON response
 * @description This middleware handles all errors that are thrown in the application.
 */
function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;

  const defaultMessages = {
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    409: 'Conflict',
    422: 'Unprocessable Entity',
    500: 'Internal Server Error',
  };

  const errorMessage = err.message || defaultMessages[statusCode] || 'An error occurred';

  console.error(`[${new Date().toISOString()}] ${err.stack}`);

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message: errorMessage,
  });
}

export default errorHandler;
