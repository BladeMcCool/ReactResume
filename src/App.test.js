import { render, screen } from '@testing-library/react';
import App from './App';

test('renders principals surname', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hagglund/i, { selector: 'div.header h2' });
  expect(linkElement).toBeInTheDocument();
});
