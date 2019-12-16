import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from './Card';

describe('Card', () => {
  test('that it matches the existing snapshot', () => {
    const { asFragment } = render(
      <Card
        key={1}
        id={567}
        text={'Take time for yourself.'}
        emoji={''}
        deleteCardCallback={() => {}}
      />
    );

    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });

  test('It will render the proper text for a card', () => {
    const container = render(<Card
      key={1}
      id={567}
      text={'Take time for yourself.'}
      emoji={''}
      deleteCardCallback={() => {}}
    />);

    expect(container.getByText(/Take time for yourself./)).toBeDefined();
    cleanup();
  });

  test('It will render the proper emoji for a card', () => {
    const container = render(<Card
      key={2}
      id={777}
      text={''}
      emoji={"heart_eyes"}
      deleteCardCallback={() => {}}
    />);

    expect(container.getByText(/😍/)).toBeDefined();
    cleanup();
  });

  test('the deleteCardCallback function is called when the delete button is clicked', () => {
    const deleteCard = jest.fn();

    const container = render(<Card
      key={6}
      id={874}
      text={'You can do anything!'}
      emoji={''}
      deleteCardCallback={deleteCard}
    />);

    const deleteButton = container.getByText(/Delete/)
    deleteButton.click();

    expect(deleteCard).toHaveBeenCalled();
    cleanup();
  });
});
