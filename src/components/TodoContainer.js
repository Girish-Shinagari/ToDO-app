function TodoContainer({ todos, setTodos}) {
    

    return (
        <div className="todos-list">
            {todos.map((todo,index) => {
                return (
                    <div className="todo-container" key={index} >
                        <p style={{margin:10}}> {todo}</p>

                        <div className="action">
                            <input type="checkbox"></input>
                            <button onClick={()=> {
                                const newarr = todos.filter((todo,pos) =>{
                                    return pos !== index;
                                })
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