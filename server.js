const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Serve frontend files
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index5.html"));
});

let applications = [];

// Submit verification application
app.post("/api/applications", (req, res) => {

    const application = {
        id: "LM" + Math.floor(100000 + Math.random() * 900000),
        name: req.body.name,
        instrument: req.body.instrument,
        instrumentNo: req.body.instrumentNo,
        location: req.body.location,
        date: req.body.date,
        status: "Pending"
    };

    applications.push(application);

    res.json({
        message: "Application submitted successfully",
        application: application
    });
});

// Check application status
app.get("/api/applications/:id", (req, res) => {

    const application = applications.find(
        app => app.id === req.params.id
    );

    if (!application) {
        return res.status(404).json({
            message: "Application not found"
        });
    }

    res.json(application);
});

// Get all applications - Admin
app.get("/api/applications", (req, res) => {
    res.json(applications);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
