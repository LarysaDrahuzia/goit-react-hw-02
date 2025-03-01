// import { useState } from 'react';
import css from './Options.module.css';

const Options = ({ updateFeedback, resetFeedback }) => {
  // const [clicks, setClicks] = useState(0);

  return (
    <div className={css.buttons}>
      <button className={css.btn} onClick={() => updateFeedback('good')}>
        Good
      </button>
      <button className={css.btn} onClick={() => updateFeedback('neutral')}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => updateFeedback('bad')}>
        Bad
      </button>
      <button className={css.btn} onClick={resetFeedback}>
        Reset
      </button>
    </div>
  );
};

export default Options;
