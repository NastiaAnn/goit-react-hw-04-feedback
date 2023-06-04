import { useState } from 'react';
import { Section } from './Section';
import { FeedbackOption } from './FeedbackOptions';
import { Statistics } from './Statistics';

export function App() {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  const handleBtnClick = option => {
    switch (option) {
      case 'good':
        setGoodFeedback(good + 1);
        break;
      case 'neutral':
        setNeutralFeedback(neutral + 1);
        break;
      case 'bad':
        setBadFeedback(bad + 1);
        break;

      default:
        return;
    }

    countTotalFeedback();
  };

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    return Number(
      countTotalFeedback() === 0
        ? 0
        : ((good * 100) / countTotalFeedback()).toFixed(0)
    );
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOption
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleBtnClick}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}
