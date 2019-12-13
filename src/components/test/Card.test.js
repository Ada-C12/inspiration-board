import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from '../Card';

describe('Card', () => {
  afterEach(cleanup);

  test('Snapshot test for Card', () => {
    const container = render(
      <Card
        data={ {text: "some text", emoji: "dog", id: 120} } 
        key={ 1 }
        deleteCard={() => {}}
      />
    );

    expect(container.asFragment()).toMatchSnapshot();
  });

  test('It will render the text of the card', () => {
    const container = render(
      <Card
        data={ {text: "some text", emoji: "dog", id: 120} } 
        key={ 1 }
        deleteCard={() => {}}
      />
    );

    // Assert
    expect(container.getByText(/some text/)).toBeDefined();
  });

  test('The "deleteCard" function is called when the `delete` button is clicked on', () => {
    // Create a mock callback function
    const deleteCard = jest.fn();

    // Render a Card
    const container = render(
      <Card
        data={ {text: "some text", emoji: "dog", id: 120} } 
        key={ 1 }
        deleteCard={deleteCard}
      />
    );

    // Find the "Delete" button
    const deleteButton = container.getByText(/Delete/);
    // Trigger a 'click' event
    deleteButton.click();

    // Verify that the callback function was called.
    expect(deleteCard).toHaveBeenCalled();
  });

});