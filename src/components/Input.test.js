import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';

test('adds a todo to the top of the list and returns focus to the input', () => {
  const setTodos = jest.fn();
  render(<Input todos={['Existing todo']} setTodos={setTodos} />);

  const input = screen.getByPlaceholderText('Enter your task');
  fireEvent.change(input, { target: { value: 'New todo' } });
  fireEvent.click(screen.getByRole('button', { name: 'Add' }));

  expect(setTodos).toHaveBeenCalledWith(['New todo', 'Existing todo']);
  expect(document.activeElement).toBe(input);
  expect(JSON.parse(localStorage.getItem('todos'))).toEqual(['New todo', 'Existing todo']);
});
