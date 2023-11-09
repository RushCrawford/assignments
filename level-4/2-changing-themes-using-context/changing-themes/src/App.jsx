import { useState } from 'react'
import Nav from './components/Nav'
import Body from './components/Body'
import Footer from './components/Footer'
import { themeContext } from './themeContext'

function App() {

  return (
    <div className={`${selectedTheme}-theme`}>
      <Nav />
      <Body selectedTheme={selectedTheme} handleChange={handleChange}/>
      <Footer />
    </div>
  )
}

export default App
