import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NewCardForm from '../NewCardForm';

describe('NewCardForm', () => {
  test('Snapshot test for NewCardForm', () => {
    const container = render(
      <NewCardForm 
        addCard={() => { }}
      />);
      
    expect(container.asFragment()).toMatchSnapshot();
    cleanup();
  });
});