import React from 'react';
import './FedbackList.css';

const FeedbackList = ({ feedbackList }) => {
  return (
    <div className="feedback-list">
      <h2>Feedback List</h2>
      {feedbackList.length === 0 ? (
        <p>No feedback available.</p>
      ) : (
        <ul>
          {feedbackList.map((feedback, index) => (
            <li key={index}>
              <strong>Tour Guide Friendliness:</strong> {feedback.tourGuideFriendliness} stars<br />
              <strong>Tour Guide Knowledge:</strong> {feedback.tourGuideKnowledge} stars<br />
              <strong>Tour Package Organization:</strong> {feedback.tourPackageOrganization} stars<br />
              <strong>Tour Package Variety:</strong> {feedback.tourPackageVariety} stars<br />
              <strong>Overall Satisfaction:</strong> {feedback.overallSatisfaction} stars<br />
              <strong>Additional Comments:</strong> {feedback.comments}<br />
              <strong>Date Submitted:</strong> {new Date(feedback.dateSubmitted).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackList;
