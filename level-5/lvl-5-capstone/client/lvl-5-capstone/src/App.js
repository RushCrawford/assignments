import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import './App.css';

function App() {
  const homeComponent = <Home />
  const aboutComponent = <About />
  const productsComponent = <Products />

  return (
    <div className="App">
      <nav></nav>
      <Routes>
        <Route path='/' element={homeComponent} />
        <Route path='/about' element={aboutComponent} />
        <Route path='/products' element={productsComponent} />
      </Routes>
    </div>
  );
}

export default App;
