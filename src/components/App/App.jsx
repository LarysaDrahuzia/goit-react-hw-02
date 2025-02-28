import { useState, useEffect } from 'react';
import Description from '../Description/Description';

import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = feedbackType => {
    setFeedback(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <Description />
      <Options />
      <Feedback />
    </>
  );
};

export default App;
