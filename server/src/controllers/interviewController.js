import Interview from "../models/interview.js";

export const createInterview = async (req, res) => {
  try {
    const { user, topic, difficulty } = req.body;
    const interview = await Interview.create({ user:req.user._id, topic, difficulty });
    res.status(201).json(interview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const listInterviews = async (req, res) => {
  try {
    const doc = await Intervie
    w.find({user: req.user._id}).sort({ date: -1 });
    res.json(doc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};