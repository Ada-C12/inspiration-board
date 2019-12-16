import React from 'react';
import { render, cleanup } from '@testing-library/react'
import NewCardForm from '../NewCardForm';

describe('NewCardForm', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const container = render(
      <NewCardForm
        addCardCallback={() => { }}
      />
    );

    // Assert
    expect(container.asFragment()).toMatchSnapshot();
    cleanup();
  });
});