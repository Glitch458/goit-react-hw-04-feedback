import Feedback from './Feedback';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notificcation';
import { useState } from 'react';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = state;

  const handleClick = name => {
    return setState(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (!good) {
      return 0;
    }
    const total = good + neutral + bad;
    const result = (good * 100) / total;
    return Math.round(result);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <Feedback options={Object.keys(state)} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};

export default App;
