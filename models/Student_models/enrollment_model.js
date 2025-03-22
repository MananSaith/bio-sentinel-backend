import db from "../../config/db.js";

const Enrollment = {};

// Create Table
Enrollment.createTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS std_enroll_new_course (
            enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
            student_id INT NOT NULL,
            course_name VARCHAR(255) NOT NULL,
            course_code VARCHAR(50) NOT NULL,
            instructor_name VARCHAR(255) NOT NULL,
            FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE
        )
    `;
    db.query(sql, (err) => {
        if (err) throw err;
        console.log("std_enroll_new_course table is ready!");
    });
};

// Enroll a student in a course
Enrollment.create = (enrollment, callback) => {
    const sql = `INSERT INTO std_enroll_new_course (student_id, course_name, course_code, instructor_name) VALUES (?, ?, ?, ?)`;
    db.query(sql, [enrollment.student_id, enrollment.course_name, enrollment.course_code, enrollment.instructor_name], callback);
};

// Get all enrollments
Enrollment.getAll = (callback) => {
    db.query("SELECT * FROM std_enroll_new_course", callback);
};

// Get enrollments by student ID
Enrollment.getByStudentId = (student_id, callback) => {
    db.query("SELECT * FROM std_enroll_new_course WHERE student_id = ?", [student_id], callback);
};

// Delete an enrollment
Enrollment.delete = (enrollment_id, callback) => {
    db.query("DELETE FROM std_enroll_new_course WHERE enrollment_id = ?", [enrollment_id], callback);
};

export default Enrollment;
