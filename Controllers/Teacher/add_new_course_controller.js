import AddNewCourse from "../../models/Teacher_models/add_new_course_model.js";

// Add a new course
export const createNewCourse = (req, res) => {
    AddNewCourse.create(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ message: "New course added successfully!", id: result.insertId });
    });
};

// Get all courses
export const getAllCourses = (req, res) => {
    AddNewCourse.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

// Get courses by teacher ID
export const getCoursesByTeacherId = (req, res) => {
    AddNewCourse.getByTeacherId(req.params.teacher_id, (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).send({ message: "No courses found for this teacher" });
        res.status(200).json(results);
    });
};

// Update a course
export const updateCourse = (req, res) => {
    AddNewCourse.update(req.params.course_id, req.body, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: "Course updated successfully!" });
    });
};

// Delete a course
export const deleteCourse = (req, res) => {
    AddNewCourse.delete(req.params.course_id, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: "Course deleted successfully!" });
    });
};
