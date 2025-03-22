import ViewCourseRecord from "../../models/Teacher_models/view_course_record_model.js";

// Add a new course record
export const createViewCourseRecord = (req, res) => {
    ViewCourseRecord.create(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ message: "Course record created successfully!", id: result.insertId });
    });
};

// Get all course records
export const getAllViewCourseRecords = (req, res) => {
    ViewCourseRecord.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

// Get course records by teacher ID
export const getViewCourseRecordByTeacherId = (req, res) => {
    ViewCourseRecord.getByTeacherId(req.params.teacher_id, (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).send({ message: "No course records found for this teacher" });
        res.status(200).json(results);
    });
};

// Update a course record
export const updateViewCourseRecord = (req, res) => {
    ViewCourseRecord.update(req.params.record_id, req.body, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: "Course record updated successfully!" });
    });
};

// Delete a course record
export const deleteViewCourseRecord = (req, res) => {
    ViewCourseRecord.delete(req.params.record_id, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: "Course record deleted successfully!" });
    });
};
