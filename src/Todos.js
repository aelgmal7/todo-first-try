import React from 'react'
import Todo from './Todo'

export default function Todos({todos,toggleCheckbox}) {
  return (

   
    todos.map(todo => {
       return  <Todo key={todo.id} toggleCheckbox={toggleCheckbox} todo={todo} />
    })
  
  )
}
