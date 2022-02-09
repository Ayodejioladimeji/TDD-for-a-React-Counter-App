import React from 'react';
import { render } from '@testing-library/react';
import Counter from '../Counter';

test('Check if header renders with correct text', () => {
  const { getByTestId } = render(<Counter />);
  const headerElement = getByTestId('header');

  expect(headerElement.textContent).toBe('My Counter');
});
