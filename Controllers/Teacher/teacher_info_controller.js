import Teacher from "../../models/Teacher_models/teacher_info_model.js";

// Create a new teacher
export const createTeacher = (req, res) => {
    Teacher.create(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Teacher created successfully!", id: result.insertId });
    });
};

// Get all teachers
export const getAllTeachers = (req, res) => {
    Teacher.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

// Get a teacher by ID
export const getTeacherById = (req, res) => {
    Teacher.getById(req.params.id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: "Teacher not found" });
        res.status(200).json(results[0]);
    });
};

// Update a teacher
export const updateTeacher = (req, res) => {
    Teacher.update(req.params.id, req.body, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: "Teacher updated successfully!" });
    });
};

// Delete a teacher
export const deleteTeacher = (req, res) => {
    Teacher.delete(req.params.id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: "Teacher deleted successfully!" });
    });
};
