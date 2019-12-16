import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Card from './Card';
describe('Card', () => {
  test('Snapshot test for Card', () => {
    const container = render(
      <Card
        id={5}
        text={'Hooray!'}
        emoji={'strawberry'}
        about={'All about my cat Rufus!'}
        deleteCardCallback={() => { }}
      />);
    expect(container.asFragment()).toMatchSnapshot();
    cleanup();
  });
});
