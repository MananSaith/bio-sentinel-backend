import CreateSession from "../../models/Teacher_models/create_session_model.js";

// Add a new session
export const createNewSession = (req, res) => {
    CreateSession.create(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ message: "New session created successfully!", id: result.insertId });
    });
};

// Get all sessions
export const getAllSessions = (req, res) => {
    CreateSession.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

// Get sessions by teacher ID
export const getSessionsByTeacherId = (req, res) => {
    CreateSession.getByTeacherId(req.params.teacher_id, (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).send({ message: "No sessions found for this teacher" });
        res.status(200).json(results);
    });
};

// Update a session
export const updateSession = (req, res) => {
    CreateSession.update(req.params.session_id, req.body, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: "Session updated successfully!" });
    });
};

// Delete a session
export const deleteSession = (req, res) => {
    CreateSession.delete(req.params.session_id, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: "Session deleted successfully!" });
    });
};
