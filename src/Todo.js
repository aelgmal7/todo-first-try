import React from 'react'

export default function Todo({todo,toggleCheckbox}) {
    const handleTodoChange =() =>{
        toggleCheckbox(todo.id)
    }
  return (
    <>
    <div>
        <label>
            <input type="checkbox" onChange={handleTodoChange} checked={todo.complete}/>
            {todo.name}
        </label>
    </div>
    </>
  )
}
