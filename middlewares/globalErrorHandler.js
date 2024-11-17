
/**
 * Global error handling middleware for Express applications.
 */
const globalErrorHandler = (err, req, res, next) => {
    // Log the complete error stack for debugging purposes
    console.error(err.stack)

    const statusCode = err.statusCode || 500;
    const errorCode = err.errorCode || 'SOMETHING_WENT_WRONG';
    const errorMessage = err.message || 'Internal Server Error';
    const stack = process.env.NODE_ENV === 'development' ? err.stack : undefined;

    console.error(errorMessage);
    return res.status(statusCode).json({
        success: false,
        timestamp: new Date().toISOString(),
        error: {
            message: errorMessage,
            errorCode: errorCode,
            stack: stack,
        },
    });

}

export default globalErrorHandler
