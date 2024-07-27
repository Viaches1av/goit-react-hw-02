import React from 'react';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => (
    <div className="feedback">
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positiveFeedback}%</p>
    </div>
);

export default Feedback;