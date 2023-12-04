const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const authRoutes = require('./src/routes/authRoutes');
const productRoutes = require('./src/routes/productRoutes');

const app = express();
app.
dotenv.config();

app.use('/auth', authRoutes);
// app.use('/product', productRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connection successful!');
        app.listen(process.env.PORT, () => {
            console.log(`Server connected to http://localhost:${process.env.PORT}`);
        })
    })
    .catch((error) => console.log('Error connecting to MongoDB:', error));