import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const getOptionsContent = () => {
    let content = [];
    for (const key in options) {
      content.push(
        <li key={key}>
          <button name={key} onClick={onLeaveFeedback}>
            {key}
          </button>
        </li>
      );
    }
    return content;
  };

    return (<ul>{getOptionsContent()}</ul>);
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
