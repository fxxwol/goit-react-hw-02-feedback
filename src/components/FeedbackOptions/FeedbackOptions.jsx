import React from 'react';
import PropTypes from 'prop-types';
import { List, FeedbackBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const getOptionsContent = () => {
    let content = [];
    for (const key in options) {
      content.push(
        <li key={key}>
          <FeedbackBtn variant="outlined" size="large" name={key} onClick={onLeaveFeedback}>
            {key}
          </FeedbackBtn>
        </li>
      );
    }
    return content;
  };

  return <List>{getOptionsContent()}</List>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
