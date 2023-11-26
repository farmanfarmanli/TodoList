import React from 'react'

const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
    return (
        <li>
            <label>
                <input checked={completed}
                    type="checkbox"
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button onClick={() => deleteTodo(id)} className="btn btn-danger">Delete</button>
        </li>
    )
}

export default TodoItem