
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react'
import NewCardForm from './NewCardForm';

describe('NewCardForm', () = > {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <NewCardForm
        deleteCardCallbackAction={() => { }}
        id={1}
        test={"emojis"}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});