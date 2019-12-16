import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from '../Card';

describe('Card', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Card
        id={1}
        text={'test'}
        cardEmoji={""}
        deleteCardCallback={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});