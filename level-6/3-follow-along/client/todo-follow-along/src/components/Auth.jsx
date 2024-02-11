import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm.jsx'
import { UserContext } from '../context/UserProvider.jsx'

const initInputs = { username: "", password: "" }

export default function Auth(){
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const { signup, login } = useContext(UserContext)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e){
    e.preventDefault()
    signup(inputs)
  }

  function handleLogin(e){
    e.preventDefault()
    login(inputs)
  }

  return (
    <div className="hero is-primary is-fullheight center">
      <div >
        <h1 className='title is-1 is-spaced'>Todo App</h1>
      </div>
      { !toggle ?
        <div className='container '>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign up"
          />
          <p className='subtitle is-4 is-aligned' onClick={() => setToggle(prev => !prev)}>Already a member?</p>
        </div>
      :
        <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
          />
          <p className='subtitle is-4 is-aligned' onClick={() => setToggle(prev => !prev)}>Not a member?</p>
        </>
      }
    </div>
  )
}