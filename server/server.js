const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoute = require('./routes/userDetailRoute');

// Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Env configuration
dotenv.config();

// Database connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/me', userRo)

app.listen(process.env.PORT, () => {
    console.log(`Connected to http://localhost:${process.env.PORT}`)
})