import React from 'react'
import './Home.scss'
import { ProductCard } from '../components/ProductCard'
import { Products } from '../components/Products'

export const Home = () => {
  return (
    <div className="home-container">
        {/* <h1>Liberatti</h1> */}
        {/* <div className="summa-box"></div> */}
        <Products></Products>
    </div>
  )
}
