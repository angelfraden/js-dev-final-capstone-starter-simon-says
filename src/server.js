const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "assets" directory
app.use('/assets', express.static(path.join(__dirname, '../assets')));

// Serve static files from the "src" directory (for your JavaScript files)
app.use('/src', express.static(path.join(__dirname, '../src')));

// Route for the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Handle favicon request and return 204 (No Content)
app.get('/favicon.ico', (req, res) => res.status(204));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
