import express from "express";
import {
    createNewCourse,
    getAllCourses,
    getCoursesByTeacherId,
    updateCourse,
    deleteCourse
} from "../..//Controllers/Teacher/add_new_course_controller.js";

const router = express.Router();

router.post("/add-new-course", createNewCourse);
router.get("/add-new-courses", getAllCourses);
router.get("/add-new-course/:teacher_id", getCoursesByTeacherId);
router.put("/add-new-course/:course_id", updateCourse);
router.delete("/add-new-course/:course_id", deleteCourse);

export default router;
