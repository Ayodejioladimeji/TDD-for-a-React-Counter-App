import React from 'react';
import '../styles/Counter.css';

const Counter = () => {
  return (
    <div className='counter'>
      <div className='counter_box'>
        <h2 data-testid='header'>My Counter</h2>
      </div>
    </div>
  );
};

export default Counter;
