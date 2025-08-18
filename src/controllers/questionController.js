import Question from "../models/question";
import Interview from "../models/interview";

export const createQuestion = async (req, res) => {
  try {
    const { interviewid, question, generated_by, topic, difficulty } = req.body;
    
    const interview=await Interview.findOne({id:interview, user:req.user._id});
    if (!interview) {
      return res.status(404).json({ error: 'Interview not found' });
    }

    const q = await Question.create({
      interview: interview._id, question_text: text, topic, difficulty, context: history || []
    });
    res.status(201).json(q);
  } catch (e) { res.status(500).json({ error: e.message }); }
};

export const getQuestionsForInterview = async (req, res) => {
  try {
    const { interviewId } = req.params;
    const qs = await Question.find({ interview: interviewId }).sort({ createdAt: 1 });
    res.json(qs);
  } catch (e) 
  { res.status(500).json({ error: e.message }); }
};