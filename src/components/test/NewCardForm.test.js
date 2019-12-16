import React from 'react';
import {render, cleanup} from '@testing-library/react';
import NewCardForm from '../NewCardForm'

const addCard = jest.fn();
const deleteCard = jest.fn();

const oneForm = <NewCardForm
  id={0}
  text='yo'
  emoji='clap'
  addCardCallback={addCard}
  deleteCardCallback={deleteCard}
  />


describe('Card', () => {
  test('that it matches the existing snapshot', () => {
    //arrange-act

    const {asFragment} = render(
      oneForm
    );
    //Assert
    expect(asFragment()).toMatchSnapshot();

  });


  test('that it shows the dogs name', () => {
    // Arrange-Act
    const result = render(
      oneForm
    );
    // Assert
    expect(result.getByText(/yo/)).toBeDefined();;

  });


  test('the addCardCallback function', () => {

    const result = render(
      oneForm
    );

    const addForm = result.getByText(/Add a Card/);

    addForm.click();
    // Assert
    expect(addCard).toHaveBeenCalled();
  });

  test('the deleteCardCallback function', () => {

    const result = render(
      oneForm
    );

    const deleteButton = result.getByText(/Delete/);

    deleteButton.click();
    // Assert
    expect(deleteCard).toHaveBeenCalled();
  });
  
  afterEach(cleanup);

});
