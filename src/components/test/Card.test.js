import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from '../Card';

describe('Card', () => {
  test('that it matches the existing snapshot', () => {
    const { asFragment } = render(
      <Card
        deleteCardCallback={() => { }}
        id={1}
        text={"Awesomesauce"}
      />
    );

    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});
