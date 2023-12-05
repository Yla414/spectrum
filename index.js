const express = require('express');
// Dotenv for env variables
const dotenv = require('dotenv').config();
const 
const dbConnect = require('./config/dbConnect');
const authRoutes = require('./routes/authRoute');

// Initialize express app
const app = express();

// Create port
const PORT = process.env.PORT || 3001;
// Connect database
dbConnect();

app.use('/api/user', authRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});