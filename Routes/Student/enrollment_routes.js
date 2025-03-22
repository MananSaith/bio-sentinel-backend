import express from "express";
import { enrollStudent, getAllEnrollments, getEnrollmentsByStudentId, deleteEnrollment } 
from "../../Controllers/Student/enrollment_controller.js";

const router = express.Router();

router.post("/enroll", enrollStudent);                        // Enroll a student in a course
router.get("/enrollments", getAllEnrollments);               // Get all enrollments
router.get("/enrollments/:student_id", getEnrollmentsByStudentId); // Get enrollments by student ID
router.delete("/enrollment/:enrollment_id", deleteEnrollment); // Delete an enrollment

export default router;
