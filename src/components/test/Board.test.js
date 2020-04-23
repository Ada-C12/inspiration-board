import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Board from '../Board';

const board = <Board
  url="https://inspiration-board.herokuapp.com/boards/"
  boardName={`test-board`}
/>
describe('Board', () => {
  test('that it matches the existing snapshot', () => {
    const { asFragment } = render(board);

    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});