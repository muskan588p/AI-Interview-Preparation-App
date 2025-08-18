import Answer from "../models/answer";
import Question from "../models/question";

export const submitAnswer = async (req, res) => {
  try {
    const { questionId, user_response } = req.body;
    
    // Validate question exists
    const question = await Question.findById(questionId);
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    const feedbackText = await getAIAnswerFeedback({
      question: q.question_text,
      userAnswer: user_response,
      topic: q.topic,
      difficulty: q.difficulty
    });

    let score;
    const m=feedbackText.match(/score[^0-9]*([0-9]{1,3})/i);
    if (m) score=Math.max(0, Math.min(100, parseInt(m[1], 10)));

    const ans=await Answer.create({
      user: req.user._id,
      question: question._id,
      user_response,
      score,
      feedback: feedbackText
    });
    
    res.status(201).json(answer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAnswersForInterview = async (req, res) => {
    try {
        const { interviewId } = req.params;
        const answers = await Answer.find({ user:req.user._id })
            .populate({path : 'question', match:{interview:interviewId}})
            .sort({ createdAt: 1 });
        
        res.json(answers.filter(a=>a.question));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};