import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from '../Card';

const deleteCard = jest.fn();
const card = <Card
  id={1}
  text={"ski"}
  emoji={"beer"}
  deleteCardCallback={deleteCard}
/>;

describe('Card', () => {
  test('that it matches the existing snapshot', () => {
    const { asFragment } = render(card);
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });

  test('It will render the proper data for the card', () => {
    const result = render(card);
    expect(result.getByText(/ski/)).toBeDefined();
    expect(result.getByText(/🍺/)).toBeDefined();
    cleanup();
  });

  test('The "deleteCardCallback" function is called when the `Delete` button is clicked on', () => {
    const result = render(card);
    const deleteButton = result.getByText(/Delete/);
    deleteButton.click();
    expect(deleteCard).toHaveBeenCalled();
  });
})