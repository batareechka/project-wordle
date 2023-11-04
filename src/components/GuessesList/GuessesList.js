import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';

function GuessesList({ guesses, attemptCount }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <Guess key={index} value={guess} />
      ))}
    </div>
  );
}

export default GuessesList;
