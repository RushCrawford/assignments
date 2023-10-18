import { useState } from 'react'
import Inputs from './Inputs.jsx'

// need 6 regular input fields
// need one text area field
// need one submit button
// a second piece of state to hold the badge array?

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthPlace: "",
    phoneNumber: "",
    favoriteFood: "",
    about: "",
  })
  const [badge, setBadge] = useState([])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value

    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
        <Inputs />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
