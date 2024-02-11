import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

export default function Navbar(){
  const { logout } = useContext(UserContext)

  return (
    <div className="tabs is-left is-medium">
      <ul>
        <li><a className='is-active'>
          <Link to="/profile">Profile</Link>
        </a></li>
        <li><a className='is-active'>
          <Link to="/public">Public</Link>
        </a></li>
      </ul>
      <div class="buttons" onClick={logout}>
          <a class="button is-light">
            Log Out
          </a>
        </div>
    </div>
  )
}