import { useState } from 'react'
import List from './List'

function App() {
  const [formData, setFormData] = useState('')
  const initArray = []
  const [namesArray, setNamesArray] = useState(initArray)


  const handleSubmit = (event) => {
    event.preventDefault()
    setNamesArray(prevNamesArray => 
      [...prevNamesArray,
      formData.fullName]
    )
    console.log(namesArray)
  }

  const namesList = namesArray.map((namesArray, index) => (<List key={index} namesArray={namesArray}/>))

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter any name"
          className="form--input"
          name="fullName"
          onChange={handleChange}
          value={formData.fullName || ''}
        />
        <button>Submit</button>
        <h1>{formData.fullName}</h1>
      </form>
      <ol>
        names {namesList}
      </ol>
    </>
  )
}

export default App
