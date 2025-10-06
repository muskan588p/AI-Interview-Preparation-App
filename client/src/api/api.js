import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000/api', // Your backend URL
});

// Add a request interceptor to include the token in headers
API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

// Authentication
export const login = (formData) => API.post('/auth/login', formData);
export const register = (formData) => API.post('/auth/register', formData);
export const getProfile = () => API.get('/auth/profile');

// Interviews
export const createInterview = (data) => API.post('/interviews', data);
export const getInterviews = () => API.get('/interviews');

// Questions
export const generateQuestion = (data) => API.post('/questions/generate', data);
export const getQuestions = (interviewId) => API.get(`/questions/${interviewId}`);

// Answers
export const submitAnswer = (data) => API.post('/answers', data);
export const getAnswers = (interviewId) => API.get(`/answers/by-interview/${interviewId}`);

export default API;