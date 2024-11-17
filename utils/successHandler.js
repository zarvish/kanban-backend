/**
 * Formats a successful API response.
 */
const successHandler = (
  res,
  data,
  message = 'Success',
  statusCode = 200,
  meta = {}
) => {
  const response = {
    success: true,
    timestamp: new Date().toISOString(),
    response: {
      message,
      data, // Spread data to include the response data
    },
    ...meta // Spread meta to include additional information if provided
  }
  return res.status(statusCode).json(response)
}

export default successHandler
