import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from '../Card';

describe('Card', () => {

  test('that it matches the existing snapshot', () => {

    const { asFragment } = render(<Card 
        id={1} 
        text={"You are amaaazing!"} 
        emoji={"clap"} 
        deleteCardCallback={() => { }}/>
    );


    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });


});