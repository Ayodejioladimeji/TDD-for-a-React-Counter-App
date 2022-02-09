import React from 'react';
import { render } from '@testing-library/react';
import Counter from '../Counter';

// Checking if the header text renders with == My Counter ==
test('Check if header renders with correct text', () => {
  const { getByTestId } = render(<Counter />);
  const headerElement = getByTestId('header');

  expect(headerElement.textContent).toBe('My Counter');
});

// checking if the counter text starts with == 0 ==
test('Counter test initially starts with 0', () => {
  const { getByTestId } = render(<Counter />);
  const counterElement = getByTestId('counter');

  expect(counterElement.textContent).toBe('0');
});
