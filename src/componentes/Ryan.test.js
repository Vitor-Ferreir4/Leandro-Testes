import React from 'react';
import { render } from '@testing-library/react';
import Ryan from './Ryan.js';


test('verifica se o componente Ryan é renderizado', () => {
  const { getByText } = render(<Ryan />);
  const linkElement = getByText(/Qualquer texto/i);
  expect(linkElement).toBeInTheDocument();
}
);
