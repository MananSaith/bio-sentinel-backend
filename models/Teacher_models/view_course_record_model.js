import db from "../../config/db.js";

const ViewCourseRecord = {};

// Create table if not exists
ViewCourseRecord.createTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS view_course_record (
            record_id INT AUTO_INCREMENT PRIMARY KEY,
            teacher_id INT,
            course_name VARCHAR(255) NOT NULL,
            total_std_enrolled INT NOT NULL,
            present_student INT NOT NULL,
            absent_student INT NOT NULL,
            FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id) ON DELETE CASCADE
        )
    `;
    db.query(sql, (err) => {
        if (err) throw err;
        console.log("View Course Record table ready!");
    });
};

// Add new course record
ViewCourseRecord.create = (record, callback) => {
    const sql = `INSERT INTO view_course_record (teacher_id, course_name, total_std_enrolled, present_student, absent_student) VALUES (?, ?, ?, ?, ?)`;
    db.query(sql, [record.teacher_id, record.course_name, record.total_std_enrolled, record.present_student, record.absent_student], callback);
};

// Get all course records
ViewCourseRecord.getAll = (callback) => {
    db.query("SELECT * FROM view_course_record", callback);
};

// Get course records by teacher ID
ViewCourseRecord.getByTeacherId = (teacher_id, callback) => {
    db.query("SELECT * FROM view_course_record WHERE teacher_id = ?", [teacher_id], callback);
};

// Update course record
ViewCourseRecord.update = (record_id, record, callback) => {
    const sql = `UPDATE view_course_record SET course_name=?, total_std_enrolled=?, present_student=?, absent_student=? WHERE record_id=?`;
    db.query(sql, [record.course_name, record.total_std_enrolled, record.present_student, record.absent_student, record_id], callback);
};

// Delete course record
ViewCourseRecord.delete = (record_id, callback) => {
    db.query("DELETE FROM view_course_record WHERE record_id = ?", [record_id], callback);
};

export default ViewCourseRecord;
