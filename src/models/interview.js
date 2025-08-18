import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index :true
  },
  topic: [{
    type: String,
    required: true
  }],
  difficulty: {
    type: String,
    required: true,
    enum: ['easy', 'medium', 'hard']
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const Interview = mongoose.model('Interview', interviewSchema);

export default Interview;