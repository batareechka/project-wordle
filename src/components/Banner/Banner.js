import React from 'react';

function Banner({ type, children, actionHandler, actionLabel }) {
  return (
    <div className={`banner ${type}`}>
      {children}{' '}
      <button className="banner-button" type="button" onClick={actionHandler}>
        {actionLabel}
      </button>
    </div>
  );
}

export default Banner;
