import React from 'react';
import { range } from '../../utils';
import { WORD_LENGTH } from '../../constants';

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(WORD_LENGTH).map((num) => (
        <span
          key={num}
          className={
            guess?.checkInfo[num].status
              ? `cell ${guess?.checkInfo[num].status}`
              : `cell`
          }
        >
          {guess?.value ? guess.value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
