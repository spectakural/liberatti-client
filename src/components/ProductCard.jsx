import React from 'react'
import "./ProductCard.scss"

export const ProductCard = () => {
  return (
    <div className="product-card">
        <div className="product-image">
            <img src="https://picsum.photos/200/300" alt="product" />
        </div>
        <div className="product-info">
            <h3>Product Name</h3>
            <p>Author</p>
            <p>Availability</p>
            <button onClick={()=>console.log("Button Pressed!")}>Add to cart</button>
        </div>
    </div>
  )
}
