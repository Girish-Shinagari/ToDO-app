import { useState } from "react"

function TodoContainer({ todos, setTodos}) {
    const [checkedTodos, setCheckedTodos] = useState([])

    return (
        <div className="todos-list">
            {todos.map((todo,index) => {
                return (
                    <div className="todo-container" key={index} >
                        <p style={{ margin: 10, textDecoration: checkedTodos[index] ? 'line-through' : 'none' }}> {todo}</p>

                        <div className="action">
                            <input
                                type="checkbox"
                                checked={Boolean(checkedTodos[index])}
                                onChange={() => {
                                    const newCheckedTodos = [...checkedTodos]
                                    newCheckedTodos[index] = !newCheckedTodos[index]
                                    setCheckedTodos(newCheckedTodos)
                                }}
                            />
                            <button onClick={()=> {
                                const newarr = todos.filter((todo,pos) =>{
                                    return pos !== index;
                                })
                                setCheckedTodos(checkedTodos.filter((_, pos) => pos !== index))
                                setTodos(newarr)
                                localStorage.setItem('todos', JSON.stringify(newarr))
                            }}>Delete</button>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default TodoContainer