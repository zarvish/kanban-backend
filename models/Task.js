import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    status: {
        type: String,
        enum: ['todo', 'in-progress', 'completed'],
        default: 'todo',
    },
});

const Task = mongoose.model('Task', taskSchema);

export default Task
