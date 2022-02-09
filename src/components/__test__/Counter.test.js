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

// checking if the counter input exists and contains initial value of === 1 ==
test('Input contains initial value of 1', () => {
  const { getByTestId } = render(<Counter />);
  const InputElement = getByTestId('input');

  expect(InputElement.value).toBe('1');
});

// checking if the button renders correctly with their appropriate symbols
test('add button renders with +', () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = getByTestId('add-btn');

  expect(addBtn.textContent).toBe('+');
});

test('add button renders with -', () => {
  const { getByTestId } = render(<Counter />);
  const minusBtn = getByTestId('minus-btn');

  expect(minusBtn.textContent).toBe('-');
});
