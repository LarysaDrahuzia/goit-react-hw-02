import { useState } from 'react';
import css from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback }) => {
  const [clicks, setClicks] = useState(0);

  return (
    <div className={css.buttons}>
      <button className={css.btn} onClick={updateFeedback}>
        Good
      </button>
      <button className={css.btn} onClick={updateFeedback}>
        Neutral
      </button>
      <button className={css.btn} onClick={updateFeedback}>
        Bad
      </button>
      <button className={css.btn} onClick={updateFeedback}>
        Reset
      </button>
    </div>
  );
};

export default Options;
