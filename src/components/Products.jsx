import React from 'react'
import "./Products.scss"
import { ProductCard } from './ProductCard'

export const Products = () => {
  return (
    <div className="products-container">
        <h2>Books to shop</h2>
        <div className="card-container">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  )
}
