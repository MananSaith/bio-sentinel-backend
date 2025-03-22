import db from "../../config/db.js";

const Student = {};

// Create table if not exists
Student.createTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS students (
            student_id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            roll_number VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            department VARCHAR(255),
            batch VARCHAR(10),
            degree VARCHAR(255),
            semester INT
        )
    `;
    db.query(sql, (err) => {
        if (err) throw err;
        console.log("Students table is ready!");
    });
};

// Create a new student
Student.create = (student, callback) => {
    const sql = `INSERT INTO students (name, roll_number, email, password, department, batch, degree, semester) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(sql, [student.name, student.roll_number, student.email, student.password, student.department, student.batch, student.degree, student.semester], callback);
};

// Get all students
Student.getAll = (callback) => {
    db.query("SELECT * FROM students", callback);
};

// Get a student by ID
Student.getById = (id, callback) => {
    db.query("SELECT * FROM students WHERE student_id = ?", [id], callback);
};

// Update student details
Student.update = (id, student, callback) => {
    const sql = `UPDATE students SET name=?, roll_number=?, email=?, password=?, department=?, batch=?, degree=?, semester=? WHERE student_id=?`;
    db.query(sql, [student.name, student.roll_number, student.email, student.password, student.department, student.batch, student.degree, student.semester, id], callback);
};

// Delete a student
Student.delete = (id, callback) => {
    db.query("DELETE FROM students WHERE student_id = ?", [id], callback);
};

export default Student;
