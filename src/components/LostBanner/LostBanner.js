import React from 'react';
import Banner from '../Banner';

function LostBanner({ answer, handleRestart }) {
  return (
    <Banner type="sad" actionHandler={handleRestart} actionLabel="Restart Game">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
