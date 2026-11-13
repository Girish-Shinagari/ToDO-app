import './App.css';
import { useState } from 'react';
import Input from './components/Input';

function App() {
      const [todos, setTodos] = useState([])


  return (
    <>
          <Input todos={todos} setTodos={setTodos}/>
    </>
  );
}

export default App;
