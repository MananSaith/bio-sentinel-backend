import express from "express";
import {
    createViewCourseRecord,
    getAllViewCourseRecords,
    getViewCourseRecordByTeacherId,
    updateViewCourseRecord,
    deleteViewCourseRecord
} from "../../Controllers/Teacher/view_course_record_controller.js";

const router = express.Router();

router.post("/view-course-record", createViewCourseRecord);
router.get("/view-course-records", getAllViewCourseRecords);
router.get("/view-course-record/:teacher_id", getViewCourseRecordByTeacherId);
router.put("/view-course-record/:record_id", updateViewCourseRecord);
router.delete("/view-course-record/:record_id", deleteViewCourseRecord);

export default router;
