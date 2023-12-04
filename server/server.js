const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
CONST

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();