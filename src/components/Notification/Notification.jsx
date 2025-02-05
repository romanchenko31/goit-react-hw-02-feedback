import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <h2>{ message }</h2>
  );
}

Notification.propTypes = {
  message: PropTypes.string
}

export default Notification;