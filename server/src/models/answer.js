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
    user_response: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        min:0,
        max: 100,
    },
    feedback: {
        type: String,
    },
}, {
    timestamps: true
});

const Answer = mongoose.model('Answer', answerSchema);

export default Answer;