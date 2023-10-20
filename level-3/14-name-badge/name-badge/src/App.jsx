import { useState } from 'react'
import Inputs from './Inputs.jsx'
import Badge from './Badge.jsx'

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
   
    setBadge(prevBadge => [formData, ...prevBadge])
    
  }

  const badges = badge.map(badge => {
    return (
      <Badge badge={badge} />
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
