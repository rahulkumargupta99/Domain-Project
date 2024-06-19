import React, { useState } from 'react'
import FeedbackForm from './FeedbackForm';
import FeedbackList from './FeedbackList';
import './Feeback.css'


const Feeback = () => {
    const [feedbackData, setFeedbackData] = useState([]);
    const handleFeedbackSubmit = (newFeedback) => {
        // Handle the new feedback data, for example, add it to the feedbackData state
        setFeedbackData([...feedbackData, newFeedback]);
      };
  return (
    <div className="Appp">
      {/* Pass the handleFeedbackSubmit function as a prop */}
      <FeedbackForm onFeedbackSubmit={handleFeedbackSubmit} />
      
      {/* Pass the feedbackData state to the FeedbackList component */}
      <FeedbackList feedbackList={feedbackData} />
    </div>
  )
}

export default Feeback;
