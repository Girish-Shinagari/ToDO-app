import './App.css';
import { useState } from 'react';
import Input from './components/Input';

function App() {
      const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos')
        return savedTodos ? JSON.parse(savedTodos) : []
      })


  return (
    <>
          <Input todos={todos} setTodos={setTodos}/>
    </>
  );
}

export default App;
