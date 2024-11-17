import catchAsyncErrors from "../middlewares/catchAsyncErrors.js"; // For handling async errors
import successHandler from "../utils/successHandler.js"; // For handling successful responses
import AppError from "../utils/appError.js";
import Task from "../models/Task.js";


// Create a new Task
export const createTask = catchAsyncErrors(async (req, res) => {
    const {title, status} = req.body;
    if (!title || !status) {
        throw new AppError('REQUIRED_FIELD_MISSING', 'title or status is missing, Please ensure all required fields are provided.');
    }

    const newTask = new Task({title, status});
    const savedTask = await newTask.save();

    successHandler(res, savedTask, "Task created successfully");
});

// Update a Task
export const updateTask = catchAsyncErrors(async (req, res) => {
    const {id} = req.params;
    const {title, status} = req.body;

    const updatedTask = await Task.findByIdAndUpdate(id, {title, status}, {new: true});

    successHandler(res, updatedTask, 'Task updated successfully');
});

// Delete a Task
export const deleteTask = catchAsyncErrors(async (req, res) => {
    const {id} = req.params;

    await Task.findByIdAndDelete(id);

    successHandler(res, null, 'Task deleted successfully');
});


// Get all Task
export const getTasks = catchAsyncErrors(async (req, res) => {
    const todos = await Task.find();
    successHandler(res, todos, 'Fetched all todos successfully');
});