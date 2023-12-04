const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const authRoutes = require('./src/routes/authRoutes');
const pro = require('./src/routes/productRoutes');

const app = express();
dotenv.config();

app.use('/auth', authRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connection successful!');
        app.listen(process.env.PORT, () => {
            console.log(`Server connected to http://localhost:${process.env.PORT}`);
        })
    })
    .catch((error) => console.log('Error connecting to MongoDB:', error));