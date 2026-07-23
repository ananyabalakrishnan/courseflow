const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'courses.json');

app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static frontend files

// Add these two lines for local assets:
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// Serve static files from the 'public' directory
app.use(express.static('public')); 

// 1. GET API: Read courses from JSON
app.get('/api/courses', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Failed to read data' });
        res.json(JSON.parse(data));
    });
});

// 2. POST API: Save updated courses back to courses.json
app.post('/api/courses', (req, res) => {
    const updatedCourses = req.body;
    fs.writeFile(DATA_FILE, JSON.stringify(updatedCourses, null, 2), (err) => {
        if (err) return res.status(500).json({ error: 'Failed to save data' });
        res.json({ success: true, message: 'Data saved successfully!' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});