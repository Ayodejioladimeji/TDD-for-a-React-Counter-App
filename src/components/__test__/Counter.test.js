import React from 'react';
import { render } from '@testing-library/react';
import Counter from '../Counter';

test('Check if header renders with correct text', () => {
  const { getByTestid } = render(<Counter />);
  const headerElement = getByTestid('header');

  expect(headerElement.textContent).toBe('My Counter');
});
