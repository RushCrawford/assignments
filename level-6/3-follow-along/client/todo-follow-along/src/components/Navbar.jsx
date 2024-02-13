import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

export default function Navbar(){
  const { logout } = useContext(UserContext)

  return (
    
    <div className="tabs is-left is-medium">
      <ul>
        <li className='is-active'>
          <Link to="/profile">Profile</Link>
        </li>
        <li className='is-active'>
          <Link to="/public">Public</Link>
        </li>
      </ul>
      <div className="buttons" onClick={logout}>
          <a className="button is-light">
            Log Out
          </a>
        </div>
    </div>
  )
}