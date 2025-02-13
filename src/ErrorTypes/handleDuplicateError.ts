export const handleDuplicateError = (error: any) => {
  const match = error.message.match(/"([^"]*)"/);
  const extractedMessage = match && match[1];
  const message = `${extractedMessage} already Exists!`;
  const errorResponse = {
    statusCode: 400,
    message: message,
    error: "Invalid Id",
    stack: error.stack,
  };
  return errorResponse;
};
