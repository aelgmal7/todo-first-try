import React,{useState,useRef,useEffect} from 'react'
import Todos from './Todos'
import { v4 as uuidv4 } from 'uuid';export default function App() {
  const [todos,setTodos] = useState([])
  const inputRef = useRef()
  const handleAddTodo = (e) => {
    const name = inputRef.current.value
    if(name === '') return 
    setTodos(previousTodos => {
      return [...previousTodos,{id:uuidv4(),name:name,complete: false}]
    })
    inputRef.current.value = null
  }
  useEffect(()=> {
    setTodos(JSON.parse(localStorage.getItem('todo')))
  },[])
  useEffect(()=> {
    localStorage.setItem('todo',JSON.stringify(todos))
  },[todos])

  const toggleCheckbox = (id) =>{
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = ! todo.complete
    console.log( newTodos)
    setTodos(newTodos)
  }
  const clearTodoList = () =>{
    setTodos([])
    localStorage.setItem('todo','')
  }
  return (
    <>
    <div style={{margin:'50px 50px'}}>
    <Todos todos={todos}   toggleCheckbox={toggleCheckbox}/>
    <form onSubmit={handleAddTodo}>
    <input ref={inputRef} />
    <button onClick={handleAddTodo}>add todo</button>
    </form>
    <button onClick={clearTodoList}>clear todo</button>
    <div>
      {todos.filter(todo => !todo.complete).length} left to do 
    </div>
    </div>

    </>
  )
}
