import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('displays the average rating for the author', () => {
    const { getByText } = render(<App />);
    const averageRating = getByText(/The average rating for Alice is:/i);
    expect(averageRating).toBeInTheDocument();
  });
});
