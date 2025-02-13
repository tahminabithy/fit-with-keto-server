"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDuplicateError = void 0;
const handleDuplicateError = (error) => {
    const match = error.message.match(/"([^"]*)"/);
    const extractedMessage = match && match[1];
    const message = `Duplicate field value: ${extractedMessage}. Please use another value!`;
    const errorResponse = {
        statusCode: 400,
        message: message,
        error: "Invalid Id",
        stack: error.stack,
    };
    return errorResponse;
};
exports.handleDuplicateError = handleDuplicateError;
