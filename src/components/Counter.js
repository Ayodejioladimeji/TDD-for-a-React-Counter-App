import React, { useState } from 'react';
import '../styles/Counter.css';

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);

  return (
    <div className='counter'>
      <div className='counter_box'>
        <h2 data-testid='header'>My Counter</h2>
        <h1 data-testid='counter'>{counterValue}</h1>
      </div>
    </div>
  );
};

export default Counter;
