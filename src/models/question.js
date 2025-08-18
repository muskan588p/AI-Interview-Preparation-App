import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    interview:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Interview',
        index: true
    },
    question: {
        type: String,
        required: true,
    },
    generated_by: {
        type: String,
        default:'AI',
    },
    topic: {
        type: String,
        required: true,
        enum: ['javascript', 'nodejs', 'dbms', 'sql', 'mongodb', 'algorithms', 'data structures', 'os', 'c++']
    },
    difficulty: {
        type: String,
        required: true,
        enum: ['easy', 'medium', 'hard']
    }
}, {
    timestamps: true
});
const Question = mongoose.model('Question', questionSchema);

export default Question;