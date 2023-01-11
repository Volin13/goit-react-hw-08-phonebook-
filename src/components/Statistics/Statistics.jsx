import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {total ? (
        <div>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage} %</li>
          </ul>
        </div>
      ) : (
        <Notification message="There is no feedback." />
      )}
    </div>
  );
};
export default Statistics;
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
