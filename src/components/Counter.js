import React, { useState } from 'react';
import '../styles/Counter.css';

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);

  return (
    <div className='counter'>
      <div className='counter_box'>
        <h2 data-testid='header'>My Counter</h2>
        <h1 data-testid='counter'>{counterValue}</h1>

        <div className='counter_btn'>
          <button data-testid='minus-btn'>-</button>
          <button data-testid='add-btn'>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
