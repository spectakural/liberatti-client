import React from 'react'
import './Navbar.scss'
import {Link} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { FaUser,FaShoppingCart } from "react-icons/fa";

export const Navbar = ({setSearch}) => {

  const handleSearch = (s) => {
    setSearch(s)
  }

  return (
    <div className="navbar">
        <div className="navbar-logo">
            <Link to="/">Liberatti</Link>
        </div>
        <ul className='navbar-search'>
            <input type="text" placeholder='Search books' onChange={(e) => {handleSearch(e.target.value)}}/>
        </ul>
        <ul className='navbar-icons'>
          <li><Link to="/cart"><FaShoppingCart /></Link></li>
          <li><Link to="/login"><FaUser /></Link></li>
        </ul>
    </div>
  )
}
