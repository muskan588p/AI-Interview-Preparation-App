// Dashboard.js
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getInterviews } from '../../api/api';
import { AuthContext } from '../../context/authcontext';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './dashboard.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [interviews, setInterviews] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getInterviews()
      .then(res => setInterviews(res.data))
      .catch(err => console.error(err));
  }, []);

  // Dummy data for the chart - replace with real analytics data
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Your Progress',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user?.name}</h2>
      
      <div className="analytics-section">
        <h3>Your Progress</h3>
        <div className="chart-container">
          <Line data={data} />
        </div>
      </div>

      <div className="interviews-section">
        <h3>Past Interviews</h3>
        <div className="interview-list">
          {interviews.length > 0 ? (
            interviews.map(interview => (
              <div key={interview._id} className="interview-card">
                <p><strong>Topic:</strong> {interview.topic.join(', ')}</p>
                <p><strong>Difficulty:</strong> {interview.difficulty}</p>
                <p><strong>Date:</strong> {new Date(interview.date).toLocaleDateString()}</p>
                <Link to={`/review/${interview._id}`} className="review-link">Review</Link>
              </div>
            ))
          ) : (
            <p>You haven't completed any interviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;