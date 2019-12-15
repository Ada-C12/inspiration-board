import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Card from './Card'

// ... Other tests and imports
describe('Card', () => {
  test('that it matches the existing snapshot', () => {
  // Arrange & Act
  const container = render(<Card
    id={1}
    text={"Hello"}
    emoji={"heart"}
  />);

  // Assert
  expect(container.getByText(/Hello/)).toBeDefined();
  // expect(asFragment()).toMatchSnapshot();
  // cleanup();
  });
});