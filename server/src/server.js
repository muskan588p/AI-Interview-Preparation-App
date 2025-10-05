import 'dotenv/config';
import express from 'express';
// import mongoose from 'mongoose';
import passport from 'passport';
import './config/passport.js'; // Ensure passport is configured
import cors from 'cors';
import { connectDb } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import interviewRoutes from './routes/interviewRoutes.js';
import questionRoutes from './routes/questionRoutes.js';
import answerRoutes from './routes/answerRoutes.js';

const app = express();
connectDb();    

app.use(passport.initialize());

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Interview AI API");
});

// routes
app.use('/api/auth', authRoutes);
app.use('/api/interviews', interviewRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/answers', answerRoutes);

// console.log("JWT Secret:", process.env.JWT_SECRET);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// function create(){
//   let counter=[];
//   for(var i=0;i<3;i++){
//     counter.push(function());
//   }
//   return counter;
// }
// const [c1, c2, c3]=create();
// console.log(c1(), c2(), c3()); // This will log the same function reference three times