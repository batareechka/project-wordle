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

function Game() {
  // Pick a random word on every pageload.
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState(GAME_STATUS.RUNNING);

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
      setGameStatus(GAME_STATUS.WON);
    }

    if (newGuesses.length === NUM_OF_GUESSES_ALLOWED && !isWordGuessed) {
      setGameStatus(GAME_STATUS.LOST);
    }
  }

  function restartGame() {
    setAnswer(() => sample(WORDS));
    setGuesses([]);
    setGameStatus(GAME_STATUS.RUNNING);
  }

  return (
    <>
      <GuessesList guesses={guesses} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === GAME_STATUS.WON && (
        <WonBanner numOfGuesses={guesses.length} handleRestart={restartGame} />
      )}
      {gameStatus === GAME_STATUS.LOST && (
        <LostBanner answer={answer} handleRestart={restartGame} />
      )}
    </>
  );
}

export default Game;
