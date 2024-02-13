import React, { useState } from 'react'

const initInputs = {
  title: "",
  description: "",
  imgUrl: ""
}

export default function TodoForm(props){
  const [inputs, setInputs] = useState(initInputs)
  const { addTodo } = props

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }
  const { title, description,  } = inputs

  function handleSubmit(e){
    e.preventDefault()
    addTodo(inputs)
    setInputs(initInputs)
  }

  return (
    <div className='box '>
      <form onSubmit={handleSubmit} className='centered'>
        <input 
          type="text" 
          className="input is-primary"
          name="title" 
          value={title} 
          onChange={handleChange} 
          placeholder="Title"/>
        <input 
          type="text" 
          className="input is-primary"
          name="description" 
          value={description} 
          onChange={handleChange} 
          placeholder="Description"/>
        <div className='buttons'>
          <button className='button is-success is-light'>Add Todo</button>
        </div>
      </form>
    </div>
  )
}