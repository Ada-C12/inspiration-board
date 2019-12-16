import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from '../Card';

describe('Card', () => {
  test('It will render the text of the card', () => {
  const container = render(<Card
    deleteCard={() => { }}
    id={3245}
    text={"Positive vibes"}
  />);
  
  expect(container.getByText(/Positive vibes/)).toBeDefined();
  });
});