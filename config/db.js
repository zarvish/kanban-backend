import mongoose from "mongoose";

// Function to connect to MongoDB
const connectMongoDB = async () => {
    try {
        // Attempt to connect to MongoDB using the connection string.
        // First, it tries to use the environment variable 'MONGODB_URI' if defined.
        // If 'MONGODB_URI' is not set (undefined), it falls back to a hardcoded static connection string.
        await mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://technicalstudent83:P9RfslqosvkqeGW1@cluster0.944lf.mongodb.net/kanban")
        console.log('MongoDB connected');  // Log successful connection
    } catch (error) {
        // If an error occurs during connection, log the error and stop the process.
        console.error('Error connecting to MongoDB', error);
        process.exit(1); // Exit process with failure if the connection is unsuccessful
    }
};

export default connectMongoDB; // Export the function to use it elsewhere in the app
