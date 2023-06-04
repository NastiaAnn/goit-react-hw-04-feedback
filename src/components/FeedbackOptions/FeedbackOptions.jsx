import PropTypes from 'prop-types';
import { ButtonSet, Button } from './styled';

export const FeedbackOption = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonSet>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </ButtonSet>
  );
};

FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
