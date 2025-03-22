import express from "express";
import {
    createNewSession,
    getAllSessions,
    getSessionsByTeacherId,
    updateSession,
    deleteSession
} from "../../controllers/Teacher/create_session_controller.js";

const router = express.Router();

router.post("/create-session", createNewSession);
router.get("/sessions", getAllSessions);
router.get("/session/:teacher_id", getSessionsByTeacherId);
router.put("/session/:session_id", updateSession);
router.delete("/session/:session_id", deleteSession);

export default router;
