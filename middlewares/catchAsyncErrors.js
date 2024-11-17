/**
 * Higher-order function to handle asynchronous route handlers and middleware.
 * Automatically catches errors and passes them to the global error handling middleware.
 */
const catchAsyncErrors = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
}

export default catchAsyncErrors
