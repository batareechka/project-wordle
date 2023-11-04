import React from "react";

function GuessInput() {
  const WORD_LENGTH = 5;
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ guess });
    setGuess("");
  };

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
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
