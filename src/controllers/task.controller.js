import { asyncHandler } from "../utils/asyncHandler.js";
import { Task } from "../models/task.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

//create task
const createTask = asyncHandler(async (req, res) => {
    const { title, description, status } = req.body;

    // validation - not empty filed
    if (!title || !status) {
        throw new ApiError(400, "All fields are required");
    }

    const task = await Task.create({
      title,
      description,
      status,
    });

    // check for task creation
    if(!task){
        throw new ApiError(500, "Something went wrong while creating the task")
    }
    return res.status(201).json(
        new ApiResponse(200, task, "Task created successfully")
    );
});

//get all tasks
const getAllTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find();
    return res.status(200).json(
        new ApiResponse(200, tasks, "Tasks fetched successfully")
    );
});

//get task by id
const getTaskById = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) {
        throw new ApiError(404, "Task not found");
    }
    return res.status(200).json(
        new ApiResponse(200, task, "Task fetched successfully")
    );
});

//update task
const updateTask = asyncHandler(async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) {
        throw new ApiError(404, "Task not found");
    }       
    return res.status(200).json(
        new ApiResponse(200, task, "Task updated successfully")
    );
});

//delete task
const deleteTask = asyncHandler(async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
        throw new ApiError(404, "Task not found");
    }
    return res.status(200).json(
        new ApiResponse(200, null, "Task deleted successfully")
    );
}); 
export {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
}