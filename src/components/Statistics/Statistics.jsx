import { Notification } from 'components/Notification';
import { StatisticContainer, TextWrap, StatisticText } from './styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticContainer>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <TextWrap>
          <StatisticText>Good: {good}</StatisticText>
          <StatisticText>Neutral: {neutral}</StatisticText>
          <StatisticText>Bad: {bad}</StatisticText>
          <StatisticText>Total: {total}</StatisticText>
          <StatisticText>
            Positive Percentage: {positivePercentage} %
          </StatisticText>
        </TextWrap>
      )}
    </StatisticContainer>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
