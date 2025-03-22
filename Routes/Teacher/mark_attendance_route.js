import express from "express";
import {
    markNewAttendance,
    getAllAttendanceRecords,
    getAttendanceByTeacherId,
    updateAttendanceRecord,
    deleteAttendanceRecord
} from "../../Controllers/Teacher/mark_attendance_controller.js";

const router = express.Router();

router.post("/mark-attendance", markNewAttendance);
router.get("/attendance", getAllAttendanceRecords);
router.get("/attendance/:teacher_id", getAttendanceByTeacherId);
router.put("/attendance/:attendance_id", updateAttendanceRecord);
router.delete("/attendance/:attendance_id", deleteAttendanceRecord);

export default router;
