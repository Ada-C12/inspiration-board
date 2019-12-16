import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from './Card';

describe('NewCardForm', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Card
        key = {3}
        id = {3}
        text = {'You are cute and cuddly'}
        emoji = {'sparkling_heart'}
        deleteCardCallback={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});