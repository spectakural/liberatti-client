import { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import './App.css'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { UserHome } from './pages/UserHome'
import { Routes, Route } from "react-router-dom";

function App() {
  const [search, setSearch] = useState('')
  return (
    <div className="app">
    <Navbar setSearch={setSearch} />
    <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* {user? <Route path="/user-home" element={<UserHome />} /> : <Route path="/user-home" element={<Home />} />} */}
    </Routes>
    </div>
  )
}

export default App
