import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Board from '../Board'

const addCard = jest.fn();
const deleteCard = jest.fn();

const oneCard = <Board
  id={0}
  text='Denali'
  emoji='dog'
  addCardCallback={addCard}
  deleteCardCallback={deleteCard}
  />


describe('Card', () => {
  test('that it matches the existing snapshot', () => {
    //arrange-act

    const {asFragment} = render(
      oneCard
    );
    //Assert
    expect(asFragment()).toMatchSnapshot();

  });


  test('that it shows the dogs name', () => {
    // Arrange-Act
    const result = render(
      oneCard
    );
    // Assert
    expect(result.getByText(/Denali/)).toBeDefined();;

  });


  test('the addCardCallback function', () => {

    const result = render(
      oneCard
    );

    const addForm = result.getByText(/Add a Card/);

    addForm.click();
    // Assert
    expect(addCard).toHaveBeenCalled();
  });

  test('the deletePetCallback function', () => {

    const result = render(
      oneCard
    );

    const deleteButton = result.getByText(/Delete/);

    deleteButton.click();
    // Assert
    expect(deleteCard).toHaveBeenCalled();
  });
  
  afterEach(cleanup);

});
