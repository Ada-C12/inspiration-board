import React from 'react';
import { render, cleanup } from '@testing-library/react'
import NewCardForm from '../NewCardForm';

describe('NewCardForm', () => {
  afterEach(cleanup);

  test('Snapshot test for NewCardForm', () => {
    const container = render(
      <NewCardForm
        addCard={() => {}}
      />
    );

    expect(container.asFragment()).toMatchSnapshot();
  });

  test('It will render the form title', () => {
    const container = render(
      <NewCardForm
        addCard={() => {}}
      />
    );

    // Assert
    expect(container.getByText(/Add a Card/)).toBeDefined();
  });

});