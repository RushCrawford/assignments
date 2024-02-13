import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Auth from './components/Auth.jsx'
import Profile from './components/Profile.jsx'
import Public from './components/Public.jsx'
import { UserContext } from './context/UserProvider.jsx'

export default function App(){
  const { userState: {token} } = useContext(UserContext)
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={ token ? <Navigate to='./profile'/> : <Auth />}
        />
        <Route 
          path="/profile"
          element={<Profile />}
        />
        <Route 
          path="/public"
          element={<Public />}
        />
      </Routes>
    </div>
  )
}