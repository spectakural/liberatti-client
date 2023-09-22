import React from 'react'

export const ProductCard = () => {
  return (
    <div className="product-card">
        <div className="product-image">
            <img src="https://picsum.photos/200/300" alt="product" />
        </div>
        <div className="product-info">
            <h3>Product Name</h3>
            <p>Product Description</p>
            <p>Product Price</p>
        </div>
    </div>
  )
}
