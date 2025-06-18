// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');  // Import the routes

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
// Use the routes from the routes folder
app.use('/', routes);

// Handle contact form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('New Contact Message:', { name, email, message });
  res.send('<h2>Thank you for reaching out!</h2><p>We’ll get back to you soon.</p><a href="/">Back to Home</a>');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
