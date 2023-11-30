import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Router>
        <nav>
          <Link to='/' className='link'>
            Home
          </Link>
          <Link to='/about' className='link'>
            About
          </Link>
          <Link to='/services' className='link'>
            Services
          </Link>
        </nav>

        <footer className='footer'>
          <Link to='/contact' className='link'>
            Contact Us
          </Link>
        </footer>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
