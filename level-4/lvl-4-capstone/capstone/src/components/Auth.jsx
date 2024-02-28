import { useContext, useState } from "react"
import AuthForm from "./AuthForm"
import { Context } from "../Context"

const initInputs = { username: '', password: '' } // initial state object for the input state

function Auth() {
    const { register, login, userState: { errMsg } } = useContext(Context) // bring in userState and context functions
    const [inputs, setInputs] = useState(initInputs) // state variable to hold and control the values of the form inputs
    const [toggle, setToggle] = useState(false) // toggle to handle login and signup form rendering

    const handleChange = (e) => { // handles changes in the input fields
        const { name, value } = e.target // extract name and value out of event.target
        setInputs(prevInput => ({ // update input state using previous values and new values
            ...prevInput,
            [name]: value
        }))
    }

    const handleRegistration = (e) => {
        e.preventDefault() // keeps inputs from refreshing
        register(inputs) // passing input values to register function in context
        setInputs(initInputs) // reset inputs
    }

    const handleLogin = (e) => {
        e.preventDefault() // keeps inputs from refreshing
        login(inputs) // passing input values to login function in context
        setInputs(initInputs) // reset inputs
    }

    return (
        <div>
            {/* TOGGLE FOR Registration AND LOGIN FORMS */}
            {/* Registration FORM */}
            {!toggle ?
                <>
                    <div className="container">
                        <AuthForm // props passed to AuthForm.jsx
                            inputs={inputs}
                            handleChange={handleChange}
                            handleSubmit={handleRegistration}
                            buttonText='Register'
                            errMsg={errMsg}
                        />
                        <p className="help is-warning is-aligned" onClick={() => { setToggle(prev => !prev) }}>Already a member?</p>
                    </div>
                </>
                :
                <>
                    {/* LOGIN FORM */}
                    <div>
                        <AuthForm // props passed to AuthForm.jsx
                            inputs={inputs}
                            handleChange={handleChange}
                            handleSubmit={handleLogin}
                            buttonText='Login'
                            errMsg={errMsg}
                        />
                        <p className="help is-warning is-aligned" onClick={() => { setToggle(prev => !prev) }}>Not a member?</p>
                    </div>
                </>}
        </div>
    )
}

export default Auth