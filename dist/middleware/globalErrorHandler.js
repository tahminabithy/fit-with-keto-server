"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleDuplicateError_1 = require("../ErrorTypes/handleDuplicateError");
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = "Something went wrong";
    let stack = "";
    let error = "";
    if ((err === null || err === void 0 ? void 0 : err.code) === 11000) {
        const simplifiedError = (0, handleDuplicateError_1.handleDuplicateError)(err);
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
exports.default = globalErrorHandler;
