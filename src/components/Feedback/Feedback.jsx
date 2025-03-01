import css from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <div className={css.box}>
      <p className={css.textBox}>Good: {good}</p>
      <p className={css.textBox}>Neutral: {neutral}</p>
      <p className={css.textBad}>Bad: {bad}</p>
      <p className={css.textBox}>Total Feedback: {totalFeedback}</p>
      <p className={css.textBox}>Positive Feedback: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
