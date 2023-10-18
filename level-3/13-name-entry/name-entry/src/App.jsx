import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    id: Math.random()
  })

  
  const handleSubmit = (event) => {
    event.preventDefault()
    // const namesList = [...formData.name] 
    // push names to an array
    // setFormData(namesList)
    // map over array and display it in the ol
  }

  // const namesArray = formData.map(data => (<li>{data}</li>))

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
        name="fullName"
        onChange={handleChange}
        value={formData.fullName}
      />
      <button>Submit</button>
      <h1>{formData.fullName}</h1>
      {/* <ol>{namesArray}</ol> */}
    </form>
  )
}

export default App
