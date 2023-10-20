import { useState } from 'react'
import Inputs from './Inputs.jsx'
import Badge from './Badge.jsx'

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

  const validateForm = () => {
    setIsValid(name !== "" && email !== "");
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    if (isValid) {
    setBadge(prevBadge => [formData, ...prevBadge])
    }
  }

  const badges = badge.map(badge => {
    return (
      <Badge badge={badge} key={key}/>
    )
  })

  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
        <Inputs className='input-container' handleChange={handleChange} formData={formData} />
        <button className='button'>Submit</button>
      </form>
      {badges}
    </div>
  )
}

export default App
