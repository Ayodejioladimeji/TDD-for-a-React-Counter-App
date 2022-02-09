import React from 'react';
import { fireEvent, render } from '@testing-library/react';
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

// Check if changing the value of the input works correctly
test('changing the value of the input works', () => {
  const { getByTestId } = render(<Counter />);
  const inputElement = getByTestId('input');

  fireEvent.change(inputElement, {
    target: {
      value: '5',
    },
  });

  expect(inputElement.value).toBe('5');
});

// Clicking on the plus button adds one to the counter
test('click on plus button to add one to the counter', () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = getByTestId('add-btn');
  const counterElement = getByTestId('counter');

  fireEvent.click(addBtn);

  expect(counterElement.textContent).toBe('1');
});

// Clicking on the minus button subtract one from the counter
test('click on minus button to subtract one from the counter', () => {
  const { getByTestId } = render(<Counter />);
  const minusBtn = getByTestId('minus-btn');
  const counterElement = getByTestId('counter');

  fireEvent.click(minusBtn);

  expect(counterElement.textContent).toBe('-1');
});

// Checking if changing the input value and then clicking the add button works correctly
test('changing the input value then clicking the add button works', () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = getByTestId('add-btn');
  const counterElement = getByTestId('counter');
  const inputElement = getByTestId('input');

  fireEvent.change(inputElement, {
    target: {
      value: 5,
    },
  });

  fireEvent.click(addBtn);

  expect(counterElement.textContent).toBe('5');
});

// Checking if changing the input value and then clicking the minus button works correctly
test('changing the input value then clicking the minus button works', () => {
  const { getByTestId } = render(<Counter />);
  const minusBtn = getByTestId('minus-btn');
  const counterElement = getByTestId('counter');
  const inputElement = getByTestId('input');

  fireEvent.change(inputElement, {
    target: {
      value: 5,
    },
  });

  fireEvent.click(minusBtn);

  expect(counterElement.textContent).toBe('-5');
});

// Checking if click the add and minus button initializes the actual value of the input
test('checking if add and minus initializes the value perfectly', () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = getByTestId('add-btn');
  const minusBtn = getByTestId('minus-btn');
  const counterElement = getByTestId('counter');
  const inputElement = getByTestId('input');

  fireEvent.change(inputElement, {
    target: {
      value: '10',
    },
  });

  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(minusBtn);
  fireEvent.click(minusBtn);

  expect(counterElement.textContent).toBe('20');

  fireEvent.change(inputElement, {
    target: {
      value: '5',
    },
  });

  fireEvent.click(addBtn);
  fireEvent.click(minusBtn);
  fireEvent.click(minusBtn);

  expect(counterElement.textContent).toBe('15');
});

// Checking if the counter contains correct className
test('counter contains correct classname', () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = getByTestId('add-btn');
  const minusBtn = getByTestId('minus-btn');
  const counterElement = getByTestId('counter');
  const inputElement = getByTestId('input');

  expect(counterElement.className).toBe('');

  fireEvent.change(inputElement, {
    target: {
      value: '50',
    },
  });

  fireEvent.click(addBtn);

  expect(counterElement.className).toBe('');

  fireEvent.click(addBtn);

  expect(counterElement.className).toBe('green');

  fireEvent.click(addBtn);

  expect(counterElement.className).toBe('green');

  fireEvent.click(minusBtn);
  fireEvent.click(minusBtn);

  expect(counterElement.className).toBe('');

  fireEvent.click(minusBtn);
  fireEvent.click(minusBtn);
  fireEvent.click(minusBtn);

  expect(counterElement.className).toBe('red');
});
