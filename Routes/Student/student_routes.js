import express from "express";
import { createStudent, getAllStudents, getStudentById, updateStudent, deleteStudent } from "../../Controllers/Student/student_controller.js";

const router = express.Router();

router.post("/students", createStudent);        // Add a student
router.get("/students", getAllStudents);        // Get all students
router.get("/students/:id", getStudentById);    // Get a student by ID
router.put("/students/:id", updateStudent);     // Update student details
router.delete("/students/:id", deleteStudent);  // Delete a student

export default router;
