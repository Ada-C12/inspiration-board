import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from '../Card';

describe('PetCard', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Card
      id={1}
      text={'Dave'}
      emoji=''
      deleteCardCallback={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});
