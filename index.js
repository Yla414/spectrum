const express = require('express');
const dotenv = require('dotenv').config();
const dbConnect = require('./config/dbConnect');


const app = express();

// Create port
const PORT = process.env.PORT || 3001;
// Connect database
dbConnect();

app.use('/', (req, res) => {
    res.send('Hello from the server side!')
})


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});