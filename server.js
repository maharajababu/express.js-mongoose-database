// This program uses ES6 - module

import express, { json } from "express";
const app = express();
import cors from "cors";
const port = process.env.PORT;
import connectToMongoose from './database/mongooseConnection.js';

app.use(cors());
app.use(json());

// Once the express js server runs only then the callback function runs. 
app.listen(port, async () => {
      
    connectToMongoose(); // This function connects to database - imported function from mongooseConnection.js
    console.log(`Server is running on port: ${port}`);

});

