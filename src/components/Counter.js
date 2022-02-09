import React, { useState } from 'react';
import '../styles/Counter.css';

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  //   The add to counter function
  const addCounter = () => {
    setCounterValue(counterValue + inputValue);
  };

  // The substract from counter function
  const minusCounter = () => {
    setCounterValue(counterValue - inputValue);
  };
  return (
    <div className='counter'>
      <div className='counter_box'>
        <h2 data-testid='header'>My Counter</h2>
        <h1 data-testid='counter'>{counterValue}</h1>

        <input
          type='number'
          data-testid='input'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <div className='counter_btn'>
          <button data-testid='minus-btn' onClick={minusCounter}>
            -
          </button>
          <button data-testid='add-btn' onClick={addCounter}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
