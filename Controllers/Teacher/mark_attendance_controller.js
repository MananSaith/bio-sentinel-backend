import MarkAttendance from "../../models/Teacher_models/mark_attendance_model.js";

// Add a new attendance record
export const markNewAttendance = (req, res) => {
    MarkAttendance.create(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ message: "Attendance marked successfully!", id: result.insertId });
    });
};

// Get all attendance records
export const getAllAttendanceRecords = (req, res) => {
    MarkAttendance.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

// Get attendance by teacher ID
export const getAttendanceByTeacherId = (req, res) => {
    MarkAttendance.getByTeacherId(req.params.teacher_id, (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).send({ message: "No attendance records found for this teacher" });
        res.status(200).json(results);
    });
};

// Update an attendance record
export const updateAttendanceRecord = (req, res) => {
    MarkAttendance.update(req.params.attendance_id, req.body, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: "Attendance record updated successfully!" });
    });
};

// Delete an attendance record
export const deleteAttendanceRecord = (req, res) => {
    MarkAttendance.delete(req.params.attendance_id, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: "Attendance record deleted successfully!" });
    });
};
