import React, { useEffect, useState } from 'react'
import './Home.scss'
import { ProductCard } from '../components/ProductCard'
import { Products } from '../components/Products'
import { Sidebar } from '../Sidebar/Sidebar'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import { Filters } from '../components/Filters'

export const Home = () => {
  const [user] = useAuthState(auth)
  useEffect(()=>{
    if(user){
      console.log(user)
    }
  },[])
  return (
    <div className="home-container">
        {/* <h1>Liberatti</h1> */}
        {/* <div className="summa-box"></div> */}
        {/* <Sidebar></Sidebar> */}
        <Filters></Filters>
        <Products></Products>
    </div>
  )
}