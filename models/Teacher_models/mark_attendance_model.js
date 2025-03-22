import db from "../../config/db.js";

const MarkAttendance = {};

// Create table if not exists
MarkAttendance.createTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS mark_attendance (
            attendance_id INT AUTO_INCREMENT PRIMARY KEY,
            teacher_id INT,
            course_name VARCHAR(255) NOT NULL,
            reason_of_manual TEXT,
            date DATE NOT NULL,
            time TIME NOT NULL,
            std_id_list TEXT NOT NULL,  -- JSON string for storing student IDs
            FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id) ON DELETE CASCADE
        )
    `;
    db.query(sql, (err) => {
        if (err) throw err;
        console.log("Mark Attendance table ready!");
    });
};

// Add attendance record
MarkAttendance.create = (attendance, callback) => {
    const sql = `INSERT INTO mark_attendance (teacher_id, course_name, reason_of_manual, date, time, std_id_list) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(sql, [attendance.teacher_id, attendance.course_name, attendance.reason_of_manual, attendance.date, attendance.time, JSON.stringify(attendance.std_id_list)], callback);
};

// Get all attendance records
MarkAttendance.getAll = (callback) => {
    db.query("SELECT * FROM mark_attendance", callback);
};

// Get attendance by teacher ID
MarkAttendance.getByTeacherId = (teacher_id, callback) => {
    db.query("SELECT * FROM mark_attendance WHERE teacher_id = ?", [teacher_id], callback);
};

// Update attendance record
MarkAttendance.update = (attendance_id, attendance, callback) => {
    const sql = `UPDATE mark_attendance SET course_name=?, reason_of_manual=?, date=?, time=?, std_id_list=? WHERE attendance_id=?`;
    db.query(sql, [attendance.course_name, attendance.reason_of_manual, attendance.date, attendance.time, JSON.stringify(attendance.std_id_list), attendance_id], callback);
};

// Delete attendance record
MarkAttendance.delete = (attendance_id, callback) => {
    db.query("DELETE FROM mark_attendance WHERE attendance_id = ?", [attendance_id], callback);
};

export default MarkAttendance;
