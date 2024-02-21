import AuthForm from './AuthForm.jsx'
import { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider.jsx'


const initInputs = { username: "", password: "" }


function Auth () {

    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)
  
    const { signup, login, userState: {errMsg} } = useContext(UserContext)
  
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
        <div className="hero is-primary is-halfheight center">
      <div >
        <h1 className='title is-1 is-spaced'>Rock the Vote</h1>
      </div>
      { !toggle ?
        <div className='container '>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign up"
            errMsg={errMsg}
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
            errMsg={errMsg}
          />
          <p className='subtitle is-4 is-aligned' onClick={() => setToggle(prev => !prev)}>Not a member?</p>
        </>
      }
    </div>
    )
}

export default Auth