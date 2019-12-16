import React from 'react';
import { render, cleanup } from '@testing-library/react'
import NewCardForm from './NewCardForm';

describe ('NewCardForm', () => {
  test('it matches existing snapshot', () => {
    /* Arrange - Act */
    const { asFragment } = render(
      <NewCardForm 
      addCardCallback={() => { }}
      />
    );

    /* Assert */
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  })
})