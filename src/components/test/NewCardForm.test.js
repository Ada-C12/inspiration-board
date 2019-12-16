import React from 'react';
import { render, cleanup } from '@testing-library/react'
import NewCardForm from '../NewCardForm';


describe('NewCardForm', () => {
  test('it matches the existing snapsnot', () => {
    const container = render(
      <NewCardForm
      addCardCallback={() => { }}
      />
    );

    expect(container.asFragment()).toMatchSnapshot();
    cleanup();
  });
});