import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from '../Card';

test('It will render the proper text for the card', () => {
  // Arrange & Act

  const container = render(<Card
    id={1}
    text={"You can do it!"}
    emoji={"heart_eyes"}
    deleteCardCallback={() => { }}
  />);

  // Assert
  expect(container.asFragment()).toMatchSnapshot();
  expect(container.getByText(/You can do it!/)).toBeDefined();
});

test('The "deleteCardCallback" function is called when the `delete` button is clicked on', () => {

  // Arrange
  // Create a mock callback function
  const deleteCard = jest.fn();

  // Render a PetCard
  const container = render(<Card
    id={2}
    text={"You are amazing!"}
    emoji={"heart_eyes"}
    deleteCardCallback={() => {deleteCard(2)}}
  />);

  // Act
  // Find the "Delete" button
  const deleteButton = container.getByText(/Delete/);
  // Trigger a 'click' event
  deleteButton.click();

  // Assert
  // Verify that the callback function was called.
  expect(deleteCard ).toHaveBeenCalled();
});