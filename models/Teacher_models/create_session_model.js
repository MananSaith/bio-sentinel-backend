import db from "../../config/db.js";

const CreateSession = {};

// Create table if not exists
CreateSession.createTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS create_session (
            session_id INT AUTO_INCREMENT PRIMARY KEY,
            teacher_id INT,
            date DATE NOT NULL,
            time TIME NOT NULL,
            room_number VARCHAR(50) NOT NULL,
            duration INT NOT NULL, -- Duration in minutes
            FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id) ON DELETE CASCADE
        )
    `;
    db.query(sql, (err) => {
        if (err) throw err;
        console.log("Create Session table ready!");
    });
};

// Add new session
CreateSession.create = (session, callback) => {
    const sql = `INSERT INTO create_session (teacher_id, date, time, room_number, duration) VALUES (?, ?, ?, ?, ?)`;
    db.query(sql, [session.teacher_id, session.date, session.time, session.room_number, session.duration], callback);
};

// Get all sessions
CreateSession.getAll = (callback) => {
    db.query("SELECT * FROM create_session", callback);
};

// Get sessions by teacher ID
CreateSession.getByTeacherId = (teacher_id, callback) => {
    db.query("SELECT * FROM create_session WHERE teacher_id = ?", [teacher_id], callback);
};

// Update a session
CreateSession.update = (session_id, session, callback) => {
    const sql = `UPDATE create_session SET date=?, time=?, room_number=?, duration=? WHERE session_id=?`;
    db.query(sql, [session.date, session.time, session.room_number, session.duration, session_id], callback);
};

// Delete a session
CreateSession.delete = (session_id, callback) => {
    db.query("DELETE FROM create_session WHERE session_id = ?", [session_id], callback);
};

export default CreateSession;
