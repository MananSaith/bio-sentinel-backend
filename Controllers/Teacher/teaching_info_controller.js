import TeachingInfo from "../../models/Teacher_models/teaching_info.js";

// Create a new teaching record
export const createTeachingInfo = (req, res) => {
    TeachingInfo.create(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ message: "Teaching info added successfully!", id: result.insertId });
    });
};

// Get all teaching records
export const getAllTeachingInfo = (req, res) => {
    TeachingInfo.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

// Get teaching records by Teacher ID
export const getTeachingInfoByTeacherId = (req, res) => {
    TeachingInfo.getByTeacherId(req.params.teacher_id, (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).send({ message: "No courses found for this teacher" });
        res.status(200).json(results);
    });
};

// Update teaching record
export const updateTeachingInfo = (req, res) => {
    TeachingInfo.update(req.params.teaching_id, req.body, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: "Teaching info updated successfully!" });
    });
};

// Delete teaching record
export const deleteTeachingInfo = (req, res) => {
    TeachingInfo.delete(req.params.teaching_id, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: "Teaching info deleted successfully!" });
    });
};
