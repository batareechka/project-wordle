import React from 'react';

function Banner({ type, answer, numOfGuesses }) {
  let className = '';
  let content = '';

  switch (type) {
    case 'won':
      className = 'happy';
      content = (
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
          </strong>
          .
        </p>
      );
      break;
    case 'lost':
      className = 'sad';
      content = (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      );
      break;
  }

  return <div className={`banner ${className}`}>{content}</div>;
}

export default Banner;
