import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from './Card';

describe('Card', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Card
      id={1}
      text=''
      emoji=''
      deleteCardCallback={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });

  test('It will render the proper text and emoji for the card', () => {
    // Arrange & Act
    const container = render(<Card
      id={1}
      text='Hello World'
      emoji='heart_eyes'
      deleteCardCallback={() => { }}
    />);

    // Assert
    expect(container.getByText(/Hello World/)).toBeDefined();
    expect(container.getByText(/😍/)).toBeDefined();
  });

  test('The "deleteCardCallback" function is called when the `delete` button is clicked on', () => {

    const deleteCard = jest.fn();

    const container = render(<Card
      id={1}
      text='Hello World'
      emoji='heart_eyes'
      deleteCardCallback={deleteCard}
    />);

    const deleteButton = container.getByText(/Delete/);
    deleteButton.click();

    expect(deleteCard).toHaveBeenCalled();
  });
});