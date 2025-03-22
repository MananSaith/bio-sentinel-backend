import Student from "../../models/Student_models/student_model.js";

// Create a new student
export const createStudent = (req, res) => {
    Student.create(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ message: "Student added successfully!", id: result.insertId });
    });
};

// Get all students
export const getAllStudents = (req, res) => {
    Student.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

// Get student by ID
export const getStudentById = (req, res) => {
    Student.getById(req.params.id, (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).send({ message: "Student not found" });
        res.status(200).json(results[0]);
    });
};

// Update a student
export const updateStudent = (req, res) => {
    Student.update(req.params.id, req.body, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: "Student updated successfully!" });
    });
};

// Delete a student
export const deleteStudent = (req, res) => {
    Student.delete(req.params.id, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: "Student deleted successfully!" });
    });
};
