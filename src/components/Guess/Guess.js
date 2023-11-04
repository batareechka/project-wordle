import React from 'react';
import { range } from '../../utils';
import { WORD_LENGTH } from '../../constants';

function Guess({ value }) {
  return (
    <p className="guess">
      {range(WORD_LENGTH).map((num) => (
        <span key={num} className="cell">
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
