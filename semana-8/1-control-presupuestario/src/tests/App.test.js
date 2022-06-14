import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  // render(<App />).debug();
  render(<App />);

  const element = screen.getByText(/💰 Presupuesto 💰/i);
  expect(element).toBeInTheDocument();

  expect(screen.getByTestId('titulo').tagName).toBe('H2');
  expect(screen.getByTestId('titulo').tagName).not.toBe('H1');
});
