import React, { useState, useEffect } from 'react';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import './App.css';

const App = () => {
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = localStorage.getItem('feedback');
        return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
    });

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);

    const updateFeedback = (feedbackType) => {
        setFeedback(prevFeedback => {
            const newFeedback = { ...prevFeedback, [feedbackType]: prevFeedback[feedbackType] + 1 };
            return newFeedback;
        });
    };

    const resetFeedback = () => {
        setFeedback({ good: 0, neutral: 0, bad: 0 });
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback = totalFeedback > 0 ? ((feedback.good / totalFeedback) * 100).toFixed(2) : 0;

    return (
        <div className="app">
            <h1 className="header">Sip Happens Café</h1>
            <p className="description">Please leave your feedback about our service by selecting one of the options below.</p>
            <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
            {totalFeedback > 0 ? (
                <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
            ) : (
                <Notification />
            )}
        </div>
    );
};

export default App;