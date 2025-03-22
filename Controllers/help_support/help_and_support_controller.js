import HelpAndSupport from "../../models/help_support_model/help_and_support_model.js";

// Add a new support request
export const addSupportRequest = (req, res) => {
    HelpAndSupport.create(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ message: "Support request submitted successfully!", id: result.insertId });
    });
};

// Get all support requests
export const getAllSupportRequests = (req, res) => {
    HelpAndSupport.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

// Delete a support request
export const deleteSupportRequest = (req, res) => {
    HelpAndSupport.delete(req.params.id, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: "Support request deleted successfully!" });
    });
};
