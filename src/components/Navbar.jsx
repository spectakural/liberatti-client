import React from 'react'
import './Navbar.scss'
import {Link} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-logo">
            <span>Liberatti</span>
        </div>
        <ul className='navbar-links'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
    </div>
  )
}
