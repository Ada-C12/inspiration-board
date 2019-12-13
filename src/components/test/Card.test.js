import React from 'react';
import { render, cleanup, getByText } from '@testing-library/react';
import Card from '../Card';

describe('Card', () => {
  test('Snapshot test for Card', () => {
    const container = render(
      <Card
        key={1}
        text={"hi"}
        emoji={"heart_eyes"}
      />);
      
    expect(container.asFragment()).toMatchSnapshot();
    cleanup();
  });
});