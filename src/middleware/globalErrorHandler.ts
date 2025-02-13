import { NextFunction, Request, RequestHandler, Response } from "express";
import { handleDuplicateError } from "../ErrorTypes/handleDuplicateError";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = err.message;
  let stack = err.stack;
  let error = err.message;
  if (err?.code === 11000) {
    const simplifiedError = handleDuplicateError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    stack = simplifiedError.stack;
    error = simplifiedError.error;
  }
  return res.status(500).json({
    success: false,
    message,
    error,
    stack,
  });
};
export default globalErrorHandler;
