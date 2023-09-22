import React from 'react'
import { Navbar } from '../components/navbar'
import './Home.scss'
import { ProductCard } from '../components/ProductCard'

export const Home = () => {
  return (
    <div className="home-container">
        <h1>Liberatti</h1>
        <div className="products">
          <ProductCard />
        </div>
    </div>
  )
}
