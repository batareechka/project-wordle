import React from "react";

function GuessInput({ guesses, setGuesses }) {
  const WORD_LENGTH = 5;
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const nextGuesses = [...guesses];
    nextGuesses.push({
      id: crypto.randomUUID(),
      value: tentativeGuess,
    });
    setGuesses(nextGuesses);
    setTentativeGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={WORD_LENGTH}
        maxLength={WORD_LENGTH}
        pattern={`[a-zA-Z]{${WORD_LENGTH}}`}
        title={`${WORD_LENGTH} letter word`}
        required
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
