import express from "express";
import { createTeacher, getAllTeachers, getTeacherById, updateTeacher, deleteTeacher } from "../../Controllers/Teacher/teacher_info_controller.js";

const router = express.Router();

router.post("/teachers", createTeacher);
router.get("/teachers", getAllTeachers);
router.get("/teachers/:id", getTeacherById);
router.put("/teachers/:id", updateTeacher);
router.delete("/teachers/:id", deleteTeacher);

export default router;
