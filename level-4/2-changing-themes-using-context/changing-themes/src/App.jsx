import { useContext, useState } from 'react'
import Nav from './components/Nav'
import Body from './components/Body'
import Footer from './components/Footer'
import { themeContext } from './themeContext'

function App() {
const {selectedTheme, handleChange} = useContext(themeContext)
  return (
    //consuming context to set the color scheme
    <div className={`${selectedTheme}-theme`}> 
      <Nav />
      {/* passing context values as props */}
      <Body selectedTheme={selectedTheme} handleChange={handleChange}/> 
      <Footer />
    </div>
  )
}

export default App
