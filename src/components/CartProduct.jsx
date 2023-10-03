import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ImgError from '../static/imgError.jpg'
import './CartProduct.scss'

export const CartProduct = ({item}) => {
    console.log("Inside cartproduct.jsx "+item.bookid)
    const [bookDetails, setBookDetails] = useState([])
    useEffect(()=>{
        // axios.get("http://localhost:3001/books/"+item.bookid)
        axios.get("https://liberatti-server.vercel.app/books/"+item.bookid)
        .then((resp)=>{
            setBookDetails(resp.data)
            console.log(bookDetails)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    },[])

    const handleQtyDecrease = ()=>{
        
    }

    const handleQtyIncrease = ()=>{

    }

    const handleDelete = ()=>{

    }

  return (
    <div className='cart-product-container'>
        <div className="book-img">
            <img src={bookDetails.length>0? bookDetails[0].image_url_m.slice(1,-1):ImgError} alt="Book image" />
        </div>
        <div className="book-info">
            <span className='book-title'>{bookDetails.length>0? bookDetails[0].name.slice(1,-1): "Loading..."}</span>
            <span className='book-author'>{bookDetails.length>0? bookDetails[0].author.slice(1,-1): "Loding author..."}</span>
            <span className='book-pubyear'>{bookDetails.length>0? bookDetails[0].yearofpub: "Loading year..."}</span>
        </div>
        <div className="book-qty">
            <button onClick={handleQtyDecrease}>-</button>
            <span>{item.qty}</span>
            <button onClick={handleQtyIncrease}>+</button>
        </div>
        <div className="cart-options">
            <button onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}
