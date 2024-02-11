import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="navbar">
      <a className='navbar-item'>
        <Link to="/profile">Profile</Link>
      </a>
      <a className='navbar-item'>
        <Link to="/public">Public</Link>
      </a>
    </nav>
  )
}