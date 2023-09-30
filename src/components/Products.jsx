import React, { useEffect, useState } from 'react'
import "./Products.scss"
import { ProductCard } from './ProductCard'
import axios from 'axios'
import Multiselect from 'multiselect-react-dropdown'

export const Products = () => {

  const [books, setBooks] = useState([])
  const options = [
    {type:"Ascending", category:""}
  ]
  async function fetchProducts(){
    await axios.get('http://localhost:3001/books')
      .then((resp) => {setBooks(resp.data)})
      .catch((error)=>{
        console.log(error.message)
      })
  }

  useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <div className="products-container">
        {/* <h2>Books to shop</h2> */}
        <div className="sort-container">
          <div className="result-number">
            <p>Showing 1290 results</p>
          </div>

          <div className="sort-menu">
            <Multiselect />
          </div>

        </div>
        <div className="card-container">
            {books.map((book)=>(
              <ProductCard book={book} key={book.bookid}/>
            ))}
        </div>
    </div>
  )
}
