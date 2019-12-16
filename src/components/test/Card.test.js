
import React from 'react';
import { render, cleanup } from "@testing-library/react"
import Card from '../Card';

describe('Card', () => {
  test('that it matches the existing snapshot', () => {
    const { asFragment } = render(
      <Card
      deleteCardCallbackAction={() => { }}
      cardText={'Test card text'}
      cardEmoji={'heart eyes'}
      id={1}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});