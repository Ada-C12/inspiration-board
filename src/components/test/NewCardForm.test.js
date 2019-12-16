import React from 'react';
import {render, cleanup } from '@testing-library/react'
import NewCardForm from '../NewCardForm';

describe('Card', () => {
  test('that it matches the existing snapshot', () => {
    const{ asFragment } = render(
      <NewCardForm
        addCardCallback={() => { }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });


  afterEach(cleanup);
});