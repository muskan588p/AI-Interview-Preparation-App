import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const register = async (req, res) => {
  try {
    const { name, email, password, preferences } = req.body;
    const exists=await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    const user = await User.create({ name, email, password, preferences });
    res.status(201).json({ message: 'User registered successfully' });
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '2h' });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  }
  catch (error){
    res.status(500).json({ error: error.message });
  }
};

