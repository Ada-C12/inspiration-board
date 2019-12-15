import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from '../Card';

describe('Card', () => {
  afterEach(cleanup);

  test('It matches the exisiting snapshot', () => {
    const { asFragment } = render(
      <Card
        key={1}
        id={1}
        text={'Hi'}
        emoji={'heart_eyes'}
        deleteCardCallback={() => {}}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('It will render the proper text for the card', () => {
    const container = render(
      <Card
        key={2}
        id={2}
        text={"Bye"}
        emoji={"beer"}
        deleteCardCallback={() => {}}
      />
    );
  
    expect(container.getByText(/Bye/)).toBeDefined();
  });

  test('The "deleteCardCallback" function is called when the `Delete Card` button is clicked on', () => {
    const deleteCardCallback = jest.fn();

    const container = render(
      <Card
        key={3}
        id={3}
        text={"Hmm..."}
        emoji={"clap"}
        deleteCardCallback={deleteCardCallback}
      />
    );

    const deleteButton = container.getByText(/Delete Card/);
    deleteButton.click();

    expect(deleteCardCallback).toHaveBeenCalled();
  });
});