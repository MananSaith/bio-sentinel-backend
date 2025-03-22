import express from "express";
import { addSupportRequest, getAllSupportRequests, deleteSupportRequest } from "../../Controllers/help_support/help_and_support_controller.js";

const router = express.Router();

router.post("/help-and-support", addSupportRequest);
router.get("/help-and-support", getAllSupportRequests);
router.delete("/help-and-support/:id", deleteSupportRequest);

export default router;
