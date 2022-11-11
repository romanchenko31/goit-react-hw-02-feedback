import FeedbackOptions from '../FeedbackOptions/FeedbackOptions.jsx';
import Statistics from '../Statistics/Statistics.jsx';
import Notification from '../Notification/Notification.jsx';
import PropTypes from 'prop-types';

const Section = ({ options, ...proprs }) => {
  return (
    <>
      <h2>Please leave feedback</h2>
      <FeedbackOptions options={options} />
      {
        proprs.total
          ? (<Statistics proprs={proprs} />)
          : (<Notification message="There is no feedback" />)
      }   
    </>
  );
}

Section.propTypes = {
    options: PropTypes.object,
    proprs:PropTypes.array
}

export default Section;

