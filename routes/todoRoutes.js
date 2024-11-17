import express from 'express';
import {createTask, deleteTask, getTasks, updateTask} from '../controllers/todoController.js';

const router = express.Router();

// Public Routes
router.post('/task', createTask); // Create a post
router.put('/task/:id', updateTask); // Create a post
router.delete('/task/:id', deleteTask); // Create a post
router.get('/task', getTasks); // Create a post


export default router;
