import PropTypes from 'prop-types';
import '../FeedbackOptions/FeedbackOptions.css';

const FeedbackOptions = ({ options }) => {
  return  (
    <>
      <button onClick={options.goodClick}>
        Good
      </button>
      <button onClick={options.neutralClick}>
        Neutral
      </button>
      <button onClick={options.badClick}>
        Bad
      </button>
    </>
  )
} 

FeedbackOptions.propTypes = {
  options:PropTypes.object
}

export default FeedbackOptions;

