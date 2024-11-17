import todoErrorCodes from "../errorcodes/todoErrorCodes.js";

// Combine error codes from various sources
// Destructuring each error code object into the combined object allows us to merge all error codes into a single, centralized object.
const COMBINED_ERROR_CODES = {
    ...todoErrorCodes ,
};

class AppError extends Error {
    constructor(errorCode, customMessage = "") {
        // Determine the default message based on the error code
        const defaultMessage = COMBINED_ERROR_CODES[errorCode]?.message || "An unknown error occurred.";
        const statusCode = COMBINED_ERROR_CODES[errorCode]?.statusCode || 500;
        // Use the custom message if provided; otherwise, use the default message
        const message = customMessage || defaultMessage;

        super(message);
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        Error.captureStackTrace(this, this.constructor); // Capture stack trace for better debugging
    }
}

export default AppError;
