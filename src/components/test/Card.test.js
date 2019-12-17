import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from '../Card';

describe('Card', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const container = render(
      <Card
      createNewCard={() => { }}
      />
    );

    // Assert
    expect(container.asFragment()).toMatchSnapshot();
    cleanup();
  });
});
