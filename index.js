const express = require('express');
// Dotenv for env variables
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const dbConnect = require('./config/dbConnect');
const authRoutes = require('./routes/authRoute');
const { errorHandler, notFound } = require('./middlewares/errorHandler');

// Initialize express app
const app = express();

// Create port
const PORT = process.env.PORT || 3001;
// Connect database
dbConnect();

// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up routers
app.use('/api/user', authRoutes);

// Pass middlewares after routes
app.use(notFound);
app.use(errorHandler)

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});