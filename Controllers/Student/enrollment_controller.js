import Enrollment from "../../models/Student_models/enrollment_model.js";

// Enroll a student in a course
export const enrollStudent = (req, res) => {
    Enrollment.create(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ message: "Student enrolled successfully!", id: result.insertId });
    });
};

// Get all enrollments
export const getAllEnrollments = (req, res) => {
    Enrollment.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

// Get enrollments by student ID
export const getEnrollmentsByStudentId = (req, res) => {
    Enrollment.getByStudentId(req.params.student_id, (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).send({ message: "No courses found for this student" });
        res.status(200).json(results);
    });
};

// Delete an enrollment
export const deleteEnrollment = (req, res) => {
    Enrollment.delete(req.params.enrollment_id, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: "Enrollment deleted successfully!" });
    });
};
