import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    name: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter any name"
        className="form--input"
        name="name"
        onChange={handleChange}
        value={formData.name}
      />
      <button>Submit</button>
      <h1>{formData.name}</h1>
    </form>
  )
}

export default App
