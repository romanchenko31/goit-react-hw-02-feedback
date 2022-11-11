import PropTypes from 'prop-types';
import '../Statistics/Statistics.css';

const Statistics = ({ proprs }) => {
  return (
    <>
      <h2>Statistic</h2>
      <span>Good:{proprs.good }</span>
      <span>Neutral:{proprs.neutral }</span>
      <span>Bad:{proprs.bad}</span>
      <span>Total:{proprs.total}</span>
      <span>Positive feedback:
        {
          proprs.total
            ? (`${proprs.positivePercentage.toFixed(1)}%`)
            : (`0%`)
        }
      </span>;
    </>
  );
}

Statistics.propTypes = {
  proprs:PropTypes.object
}

export default Statistics;

