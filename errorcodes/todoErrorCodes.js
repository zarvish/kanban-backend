const todoErrorcodes = Object.freeze({
    REQUIRED_FIELD_MISSING: {
        statusCode: 400,
        message: "A required field is missing. Please ensure all required fields are provided.",
    },
});

export default todoErrorcodes;
