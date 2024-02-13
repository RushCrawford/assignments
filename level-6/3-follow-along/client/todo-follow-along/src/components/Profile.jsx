import React, { useContext } from 'react'
import TodoForm from './TodoForm.jsx'
import TodoList from './TodoList.jsx'
import Todo from './Todo.jsx'
import { UserContext } from '../context/UserProvider.jsx'


export default function Profile(){
const { 
  userState: {
    user: {
      username
    },
    todos}, 
    addTodo, 
  } = useContext(UserContext)

  return (
      <div className='hero is-primary is-fullheight centered'>
        <div className='box centered is-shrunk'>
          <h1 >Welcome @{username}!</h1>
          <h3 >Add A Todo</h3>
          <TodoForm addTodo={addTodo} />
        </div>
        <h3 className='title'>Your Todos</h3>
        <TodoList todos={todos}/>
      </div>
  )
}