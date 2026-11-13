import { useState } from "react"
import TodoContainer from "./TodoContainer"
function Input({todos,setTodos}) {

    const [inputval, setInputval] = useState('')

    function todo(e) {
        setInputval(e.target.value)
    }

    function displayTodo() {
        if (inputval !== '') {
            setTodos([...todos, inputval])
            setInputval('')
        }
    }


    return (
        <>
            <div className="main">
                <h1>To Do App</h1>
                <div className="input-container">
                    <input type="text" placeholder="Enter your task" onChange={todo} value={inputval}></input>
                    <button onClick={displayTodo}>Add</button>
                </div>


                <TodoContainer todos={todos} setTodos={setTodos} />

            </div >
        </>
    )
}

export default Input