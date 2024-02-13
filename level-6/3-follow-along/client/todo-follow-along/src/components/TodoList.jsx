import React from 'react'
import Todo from './Todo.jsx'

export default function TodoList(props){
  const { todos } = props
  const todoCard = todos.map(todo => <Todo {...todo} key={todo._id}/>)
  return (
    <div className="todo-list">
      {todoCard}
    </div>
  )
}