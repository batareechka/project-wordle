import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessesList from "../GuessesList";
import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([
      ...guesses,
      {
        id: crypto.randomUUID(),
        value: tentativeGuess,
      },
    ]);
  }

  return (
    <>
      <GuessesList guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
