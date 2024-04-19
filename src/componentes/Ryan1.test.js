import React from 'react';
import { render, screen } from '@testing-library/react';
import Ryan1 from './Ryan1.js';


test('verifica se a imagem é renderizada', () => {
  render(<Ryan1 />);
 
  const imgElement = screen.getByAltText('minha imagem');
 
  expect(imgElement).toBeInTheDocument();
}
);
