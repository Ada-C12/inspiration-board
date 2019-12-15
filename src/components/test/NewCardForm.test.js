import React from 'react';
import { render, cleanup } from '@testing-library/react'
import NewCardForm from '../NewCardForm';

describe('NewCardForm', () => {
  afterEach(cleanup);

  test('It matches the existing snapshot', () => {
    const { asFragment } = render(
      <NewCardForm
        addCardCallback={() => { }}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('It will render the proper title for the form', () => {
    const container = render(
      <NewCardForm
        addCardCallback={() => { }}
      />
    );
  
    expect(container.getByText(/Write New Message/)).toBeDefined();
  });

  test('The "addCardCallback" function is called when the `Add` button is clicked on', () => {
    const addCardCallback = jest.fn();

    const container = render(
      <NewCardForm
        addCardCallback={addCardCallback}
      />
    );

    const addButton = container.getByText(/Add/);
    addButton.click();

    expect(addCardCallback).toHaveBeenCalled();
  });
});