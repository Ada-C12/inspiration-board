import React from 'react';
import {render, cleanup } from '@testing-library/react'
import Card from '../Card';

describe('Card', () => {
  test('that it matches the existing snapshot', () => {
    const result = render(
    <Card
      id = {1}
      text = {"you can do it"}
      emoji = {":heart:"}
      deleteCallback = {() => { }}
    />
  );

    expect(result.asFragment()).toMatchSnapshot();
  })

  test('it will render the proper text/emoji for the card', () => {
    const container = render(
    <Card
      id = {1}
      text = {"you can do it"}
      emoji = {":heart:"}
      deleteCallback = {() => { }}
    />);

    expect(container.getByText(/you can do it/)).toBeDefined();
    expect(container.getByText(/❤️/)).toBeDefined();
  });

  test('the "deleteCardCallback" function is called when the `delete` button is clicked', () => {
    const deleteCard = jest.fn();

    const container = render(
    <Card
      id = {1}
      text = {"you can do it"}
      emoji = {":heart:"}
      deleteCallback = {deleteCard}
    />);

    const deleteButton = container.getByText(/delete/);
    deleteButton.click();

    expect(deleteCard).toHaveBeenCalled();
  })

  afterEach(cleanup);
})