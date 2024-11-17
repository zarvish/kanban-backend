import cors from 'cors';
import express from 'express';
import globalErrorHandler from './middlewares/globalErrorHandler.js';
import registerRoutes from "./routes/index.js";
import connectMongoDB from './config/db.js'

const app = express();
await connectMongoDB()

app.use(express.json());  // Parse JSON payloads
app.use(express.urlencoded({extended: true}));  // Allow form data (URL-encoded data)
app.use(cors());  // Enable Cross-Origin Resource Sharing for API access

// Register all routes from index.js file in the routes folder
registerRoutes(app);

// Apply global error handling middleware
app.use(globalErrorHandler);

// Define the default route
app.get('/', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "API is working fine"
    });
});


export default app;
