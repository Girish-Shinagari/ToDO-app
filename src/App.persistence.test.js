import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  localStorage.clear();
});

test('loads saved todos when the app starts', () => {
  localStorage.setItem('todos', JSON.stringify(['Saved todo']));

  render(<App />);

  expect(screen.getByText(/Saved todo/)).toBeInTheDocument();
});
