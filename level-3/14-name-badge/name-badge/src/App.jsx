import { useState } from 'react'

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
    const {name, value} = event.target
    setFormData(prevFormData => ({
    ...prevFormData,

  }))}

  return (
    <>
      <form>
        <input 
          type="firstName" 
          placeholder="First Name"
          className="form--input"
          name="firstName"
          onChange={handleChange}
          value={formData.email}
        />
        <input 
          type="lastName" 
          placeholder="Last Name"
          className="form--input"
          name="lastName"
          onChange={handleChange}
          value={formData.email}
        />
        <input 
          type="email" 
          placeholder="Email"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input 
          type="birthPlace" 
          placeholder="Place of Birth"
          className="form--input"
          name="birthPlace"
          onChange={handleChange}
          value={formData.email}
        />
        <input 
          type="phoneNumber" 
          placeholder="Phone"
          className="form--input"
          name="phoneNumber"
          onChange={handleChange}
          value={formData.email}
        />
        <input 
          type="favoriteFood" 
          placeholder="Favorite Food"
          className="form--input"
          name="favoriteFood"
          onChange={handleChange}
          value={formData.email}
        />
        <input 
          type="about" 
          placeholder="Tell us about yourslef"
          className="form--input"
          name="about"
          onChange={handleChange}
          value={formData.email}
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
