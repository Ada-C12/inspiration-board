import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from './Card';

describe('Card', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Card
        text="test text"
        emoji="beer"
        id={12345}
        deleteCardCallack={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});