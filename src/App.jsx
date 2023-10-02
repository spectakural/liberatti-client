import { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import './App.css'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { UserHome } from './pages/UserHome'
import { Routes, Route } from "react-router-dom"
import axios from 'axios'

function App() {
  const [search, setSearch] = useState('')
  const [userDetails, setUserDetails] = useState({})
  const [user] = useAuthState(auth)

  useEffect(()=>{
    if(user){
      axios.get("http://localhost:3001/users/"+user.email)
      .then((response)=>{
        setUserDetails(response.data)
        console.log(userDetails)
      })
      .catch((error)=>{
        console.log(error.message)
      })
    }
  },[user])

  return (
    <div className="app">
    <Navbar setSearch={setSearch} />
    <Routes>
        <Route path="/" element={<Home search={search} userDetails={userDetails} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-home" element={<UserHome userDetails={userDetails} />}/>
    </Routes>
    </div>
  )
}

export default App
