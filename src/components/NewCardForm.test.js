import React from 'react';
import { render, cleanup } from '@testing-library/react'
import NewCardForm from './NewCardForm';

describe('NewCardForm', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <NewCardForm
        addCardCallback={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
  test('The "addCardCallback" function is called when the `submit` button is clicked on', () => {

    const addCard = jest.fn();

    const container = render(<NewCardForm
      addCardCallback={addCard}
    />);

    const submitButton = container.getByDisplayValue(/Add a Card/);
    submitButton.click();

    expect(addCard).toHaveBeenCalled();
  });
});