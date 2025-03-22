import db from "../../config/db.js";

const AddNewCourse = {};

// Create table if not exists
AddNewCourse.createTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS add_new_course (
            course_id INT AUTO_INCREMENT PRIMARY KEY,
            teacher_id INT,
            batch VARCHAR(50) NOT NULL,
            course_name VARCHAR(255) NOT NULL,
            section VARCHAR(50) NOT NULL,
            FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id) ON DELETE CASCADE
        )
    `;
    db.query(sql, (err) => {
        if (err) throw err;
        console.log("Add New Course table ready!");
    });
};

// Add new course
AddNewCourse.create = (course, callback) => {
    const sql = `INSERT INTO add_new_course (teacher_id, batch, course_name, section) VALUES (?, ?, ?, ?)`;
    db.query(sql, [course.teacher_id, course.batch, course.course_name, course.section], callback);
};

// Get all courses
AddNewCourse.getAll = (callback) => {
    db.query("SELECT * FROM add_new_course", callback);
};

// Get courses by teacher ID
AddNewCourse.getByTeacherId = (teacher_id, callback) => {
    db.query("SELECT * FROM add_new_course WHERE teacher_id = ?", [teacher_id], callback);
};

// Update a course
AddNewCourse.update = (course_id, course, callback) => {
    const sql = `UPDATE add_new_course SET batch=?, course_name=?, section=? WHERE course_id=?`;
    db.query(sql, [course.batch, course.course_name, course.section, course_id], callback);
};

// Delete a course
AddNewCourse.delete = (course_id, callback) => {
    db.query("DELETE FROM add_new_course WHERE course_id = ?", [course_id], callback);
};

export default AddNewCourse;
