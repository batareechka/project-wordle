import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import GuessesList from '../GuessesList';
import GuessInput from '../GuessInput';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED).map((_) => ({
      value: '',
      checkInfo: [],
    }))
  );
  const [attemptCount, setAttemptCount] = React.useState(0);

  function handleSubmitGuess(tentativeGuess) {
    const newGuesses = [...guesses];
    const guessCheckInfo = checkGuess(tentativeGuess, answer);
    newGuesses[attemptCount] = {
      value: tentativeGuess,
      checkInfo: guessCheckInfo,
    };
    setGuesses(newGuesses);
    setAttemptCount(attemptCount + 1);
  }

  return (
    <>
      <GuessesList guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
