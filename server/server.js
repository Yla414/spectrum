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


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://spectra:<password>@spectrum.jxpqmi8.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Connected to http://localhost:${process.env.PORT}`)
})