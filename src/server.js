import 'dotenv/config';
import express from 'express';
// import mongoose from 'mongoose';
import cors from 'cors';
import { connectDb } from './config/db.js';
import { get } from 'mongoose';

const app = express();
connectDb();    


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Interview AI API");
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});