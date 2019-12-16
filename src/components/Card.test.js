// src/components/test/PetCard.test.js

import React from 'react';
import Card from './Card';
import { render, cleanup } from '@testing-library/react'

// ... Other tests and imports

test('It will render the proper data for a card', () => {
  // Arrange & Act
  const container = render(
  <Card id={1}
    text={"Samson"}
    emoji={"heart-eyes"}
    deleteCardCallback={() => { }}/> 
    );

  // Assert
  expect(container.getByText(/Samson/)).toBeDefined();
});