import { fireEvent, render, screen } from '@testing-library/react';
import TodoContainer from './TodoContainer';

test('strikes through a todo when its checkbox is checked', () => {
  render(<TodoContainer todos={['Buy milk']} setTodos={jest.fn()} />);

  const todoText = screen.getByText(/Buy milk/);
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(checkbox);
  expect(todoText).toHaveStyle({ textDecoration: 'line-through' });

  fireEvent.click(checkbox);
  expect(todoText).toHaveStyle({ textDecoration: 'none' });
});
