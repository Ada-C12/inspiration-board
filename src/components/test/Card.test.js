import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from '../Card';

describe('Card', () => {
  afterEach(cleanup);

  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(<Card
      id={1}
      text={"Hello World"}
      emoji={"Cat"}
      key={2}
      deleteCardCallback={() => { }}
    />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  })
  });