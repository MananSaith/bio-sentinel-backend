import db from "../../config/db.js";

const TeachingInfo = {};

// Create the table
TeachingInfo.createTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS teaching_info (
            teaching_id INT AUTO_INCREMENT PRIMARY KEY,
            teacher_id INT NOT NULL,
            course_taught VARCHAR(255) NOT NULL,
            total_classes_conducted INT DEFAULT 0,
            average_attendance FLOAT DEFAULT 0.0,
            FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id) ON DELETE CASCADE
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error("Error creating teaching_info table:", err);
        else console.log("Teaching Info table ready!");
    });
};

// Create a new teaching record
TeachingInfo.create = (teachingData, result) => {
    const sql = `INSERT INTO teaching_info (teacher_id, course_taught, total_classes_conducted, average_attendance) VALUES (?, ?, ?, ?)`;
    db.query(sql, [teachingData.teacher_id, teachingData.course_taught, teachingData.total_classes_conducted, teachingData.average_attendance], (err, res) => {
        if (err) return result(err, null);
        result(null, { insertId: res.insertId });
    });
};

// Get all teaching records
TeachingInfo.getAll = (result) => {
    const sql = `SELECT * FROM teaching_info`;
    db.query(sql, (err, res) => {
        if (err) return result(err, null);
        result(null, res);
    });
};

// Get teaching records by Teacher ID (to see all courses of a specific teacher)
TeachingInfo.getByTeacherId = (teacher_id, result) => {
    const sql = `SELECT * FROM teaching_info WHERE teacher_id = ?`;
    db.query(sql, [teacher_id], (err, res) => {
        if (err) return result(err, null);
        result(null, res);
    });
};

// Update a teaching record
TeachingInfo.update = (teaching_id, updateData, result) => {
    const sql = `UPDATE teaching_info SET course_taught = ?, total_classes_conducted = ?, average_attendance = ? WHERE teaching_id = ?`;
    db.query(sql, [updateData.course_taught, updateData.total_classes_conducted, updateData.average_attendance, teaching_id], (err, res) => {
        if (err) return result(err, null);
        result(null, res);
    });
};

// Delete a teaching record
TeachingInfo.delete = (teaching_id, result) => {
    const sql = `DELETE FROM teaching_info WHERE teaching_id = ?`;
    db.query(sql, [teaching_id], (err, res) => {
        if (err) return result(err, null);
        result(null, res);
    });
};

export default TeachingInfo;
