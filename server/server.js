const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Env configuration
dotenv.config();


connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Connected to http://localhost:${process.env.PORT}`)
})