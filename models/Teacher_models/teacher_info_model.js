import  db from "../../config/db.js";

const Teacher = {};

// Create table if not exists
Teacher.createTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS teachers (
            teacher_id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            department VARCHAR(255),
            designation VARCHAR(255),
            contact VARCHAR(15)
        )
    `;
    db.query(sql, (err) => {
        if (err) throw err;
        console.log("Teachers table ready!");
    });
};

// Create a new teacher
Teacher.create = (teacher, callback) => {
    const sql = `INSERT INTO teachers (name, email, password, department, designation, contact) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(sql, [teacher.name, teacher.email, teacher.password, teacher.department, teacher.designation, teacher.contact], callback);
};

// Get all teachers
Teacher.getAll = (callback) => {
    db.query("SELECT * FROM teachers", callback);
};

// Get a teacher by ID
Teacher.getById = (id, callback) => {
    db.query("SELECT * FROM teachers WHERE teacher_id = ?", [id], callback);
};

// Update teacher details
Teacher.update = (id, teacher, callback) => {
    const sql = `UPDATE teachers SET name=?, email=?, password=?, department=?, designation=?, contact=? WHERE teacher_id=?`;
    db.query(sql, [teacher.name, teacher.email, teacher.password, teacher.department, teacher.designation, teacher.contact, id], callback);
};

// Delete a teacher
Teacher.delete = (id, callback) => {
    db.query("DELETE FROM teachers WHERE teacher_id = ?", [id], callback);
};

export default Teacher;
