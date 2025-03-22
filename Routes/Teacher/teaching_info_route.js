import express from "express";
import {
    createTeachingInfo,
    getAllTeachingInfo,
    getTeachingInfoByTeacherId,
    updateTeachingInfo,
    deleteTeachingInfo
} from "../../Controllers/Teacher/teaching_info_controller.js";

const router = express.Router();

// Routes
router.post("/teaching", createTeachingInfo); // Add teaching info
router.get("/teaching", getAllTeachingInfo); // Get all teaching records
router.get("/teaching/:teacher_id", getTeachingInfoByTeacherId); // Get records by teacher ID
router.put("/teaching/:teaching_id", updateTeachingInfo); // Update record
router.delete("/teaching/:teaching_id", deleteTeachingInfo); // Delete record

export default router;
