const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/', (req, res) => {
    res.send
})


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});