import db from "../../config/db.js";

const HelpAndSupport = {};

// Create table if not exists
HelpAndSupport.createTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS help_and_support (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;
    db.query(sql, (err) => {
        if (err) throw err;
        console.log("Help & Support table ready!");
    });
};

// Add a new support request
HelpAndSupport.create = (data, callback) => {
    const sql = `INSERT INTO help_and_support (name, email, description) VALUES (?, ?, ?)`;
    db.query(sql, [data.name, data.email, data.description], callback);
};

// Get all support requests
HelpAndSupport.getAll = (callback) => {
    db.query("SELECT * FROM help_and_support", callback);
};

// Delete a support request
HelpAndSupport.delete = (id, callback) => {
    db.query("DELETE FROM help_and_support WHERE id = ?", [id], callback);
};

export default HelpAndSupport;
