const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

ap


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});