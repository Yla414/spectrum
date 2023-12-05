const express = require('express');
const dotenv = require('dotenv').config();
const dbConnect = require

const app = express();

const PORT = process.env.PORT || 3001;

app.use('/', (req, res) => {
    res.send('Hello from the server side!')
})


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});