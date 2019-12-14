import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from '../Card';

describe('Card', () => {
  it('that it matches the existing snapshot', () => {
    const { asFragment } = render(
      <Card
      key={1}
      identifier={1}
      text={"New Card"}
      emoji={""}
      onButtonClick={() => { }}
      />
    );
    
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });

  test('It will render the proper text for the card', () => {
    const container = render(<Card
      identifier={1}
      text={"You got this!"}
      emoji={"heart_eyes"}
      onButtonClick={() => { }}
    />);

    expect(container.getByText(/this!/)).toBeDefined();
  });

});