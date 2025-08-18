import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        index: true
    },
    user_answer: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        min:0,
        max: 10,
    },
    feedback: {
        type: String,
        default: '',
    },
}, {
    timestamps: true
});

const Answer = mongoose.model('Answer', answerSchema);

export default Answer;