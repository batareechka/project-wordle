import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import GuessesList from '../GuessesList';
import GuessInput from '../GuessInput';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    const guessCheckInfo = checkGuess(tentativeGuess, answer);
    const newGuesses = [
      ...guesses,
      {
        value: tentativeGuess,
        checkInfo: guessCheckInfo,
      },
    ];
    setGuesses(newGuesses);
  }

  return (
    <>
      <GuessesList guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
