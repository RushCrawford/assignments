import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <nav className="nav">
            <h3 className="nav--title">Start Bootstrap</h3>
            <div className="nav--elements-container">
                <h4 className="nav--elements">HOME</h4>
                <h4 className="nav--elements">ABOUT</h4>
                <h4 className="nav--elements">SAMPLE POST</h4>
                <h4 className="nav--elements">CONTACT</h4>
            </div>
        </nav>
  )
}

export default App
