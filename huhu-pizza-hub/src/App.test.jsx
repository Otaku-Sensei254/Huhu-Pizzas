import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Huhus homepage and menu navigation', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Flame-Grilled Flavor.*Handcrafted Pizzas/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Huhus Pizza - Home/i })).toHaveAttribute('href', '/');
});
