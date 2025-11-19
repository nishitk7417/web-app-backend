import { Router } from "express";
import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from "../controllers/task.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router();
router.route("/").post(verifyJWT, createTask);
router.route("/").get(verifyJWT, getAllTasks);
router.route("/:id").get(verifyJWT, getTaskById);
router.route("/:id").put(verifyJWT, updateTask);
router.route("/:id").delete(verifyJWT, deleteTask); 

export default router;