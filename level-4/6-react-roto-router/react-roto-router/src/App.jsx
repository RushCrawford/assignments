import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'

function App() {

  return (
    <>
      <Router>
        <nav></nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
