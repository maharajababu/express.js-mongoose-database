import * as dotenv from 'dotenv';
dotenv.config();

const ATLAS_URI = process.env.ATLAS_URI;
import mongoose from 'mongoose';
import workingWithModel from './workingWithModel.js';

export default function connectToMongoose() {

  mongoose.connect(ATLAS_URI, (err) => {
    if(err)
    {
      console.log("Error while connecting to MongoDB");
    }
    else
    {
      console.log("Congrats! You are successfully connected to MongoDB");
      workingWithModel(); 
    }
  });
}








