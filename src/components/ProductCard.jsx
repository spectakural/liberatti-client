import React from 'react'
import "./ProductCard.scss"
import errImg from "../static/imgError.jpg"

export const ProductCard = ({book}) => {

  const onImageError = (e) =>{
    e.target.src = errImg
  }
  const namelen = book.name.length
  var lim = -1
  if(namelen>35){
    lim = 35
  }

  return (
    <div className="product-card">
        <div className="product-image">
            <img src={book.image_url_m.slice(1,-1)} alt="product" onError={onImageError} />
        </div>
        <div className="product-info">
            <h3>{book.name.slice(1,lim)+'...'}</h3>
            <p style={{fontStyle:"italic"}}>~ {book.author.slice(1,-1)}</p>
            <p>{book.availability} copies left</p>
            <button onClick={()=>console.log("Button Pressed!")}>Add to cart</button>
        </div>
    </div>
  )
}
