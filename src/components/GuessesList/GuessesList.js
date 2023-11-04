import React from "react";

function GuessesList({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ id, value }) => (
        <p key={id} className="guess">
          {value}
        </p>
      ))}
    </div>
  );
}

export default GuessesList;