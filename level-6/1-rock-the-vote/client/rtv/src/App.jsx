import { useState, useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Auth from './components/Auth'
import Navbar from './components/Navbar'
import { UserContext } from './context/UserProvider'

function App() {
  const { userState: {token} } = useContext(UserContext)

  return (
    <div>
      {token && <Navbar />}
      <Routes>
        <Route 
          path='/'
          element={<Auth />}
        />
        <Route />
      </Routes>
    </div>
  )
}

export default App
