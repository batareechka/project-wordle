import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { GAME_STATUS, NUM_OF_GUESSES_ALLOWED } from '../../constants';

import Banner from '../Banner';
import GuessesList from '../GuessesList';
import GuessInput from '../GuessInput';
import LostBanner from '../LostBanner/LostBanner';
import WonBanner from '../WonBanner/WonBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, seGameStatus] = React.useState(GAME_STATUS.RUNNING);

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

    const isWordGuessed = tentativeGuess === answer;
    if (isWordGuessed) {
      seGameStatus(GAME_STATUS.WON);
    }

    if (newGuesses.length === NUM_OF_GUESSES_ALLOWED && !isWordGuessed) {
      seGameStatus(GAME_STATUS.LOST);
    }
  }

  return (
    <>
      <GuessesList guesses={guesses} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === GAME_STATUS.WON && (
        <WonBanner numOfGuesses={guesses.length} />
      )}
      {gameStatus === GAME_STATUS.LOST && (
        <LostBanner answer={answer} />
      )}
    </>
  );
}

export default Game;
