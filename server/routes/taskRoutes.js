import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

// All routes below require login
router.use(authMiddleware);

// Get all tasks
router.get("/", getTasks);

// Create task
router.post("/", createTask);

// Update task
router.put("/:id", updateTask);

// Delete task
router.delete("/:id", deleteTask);

export default router;