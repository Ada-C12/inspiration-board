import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from '../Card';

describe('Card', () => {
  afterEach(cleanup);

  test('that it matches the existing snapshot', () => {
    const { asFragment } = render(<Card
      cardText={'Testing card'}
      cardEmoji={'cat'}
      id={1}
      deleteCardCallback={() => { }}
    />);

    expect(asFragment()).toMatchSnapshot();

  });

  test('The deleteCardCallback function is called when the delete button is clicked', () => {

    const deletePet = jest.fn();

    const container = render(<Card 
      cardText={'Testing card'}
      cardEmoji={'cat'}
      id={1}
      deleteCardCallback={deletePet}
      />);
      const deleteButton = container.getByText(/Delete/);

      deleteButton.click();

      expect(deletePet).toHaveBeenCalled();
  });
})