import React, { useEffect, useState } from 'react'
import "./Products.scss"
import { ProductCard } from './ProductCard'
import axios from 'axios'
import Multiselect from 'multiselect-react-dropdown'

export const Products = ({books}) => {

  const [viewBooks, setViewBooks] = useState([])
  const options = [
    {type:"Ascending", id:1},
    {type:"Descending", id:2}
  ]

  useEffect(() => {
    setViewBooks([...books])
  }, [books])
  
  

  const sort = (list, item) => {
    // console.log(books)
    if (item.type === "Descending")
      setViewBooks([...books].reverse())
    else
      setViewBooks([...books])
    console.log("Books order reversed!")
    // console.log(books)
  }

  return (
    <div className="products-container">
        {/* <h2>Books to shop</h2> */}
        <div className="sort-container">
          <div className="result-number">
            <p>Showing {books.length} results</p>
          </div>

          <div className="sort-menu">
            <span>Sort by: </span>
            <Multiselect 
              options={options}
              displayValue='type'
              singleSelect={true}
              selectedValues={[options[0]]}
              onSelect={sort}
              avoidHighlightFirstOption={true}
            />
          </div>

        </div>
        <div className="card-container">
            {viewBooks.map((book)=>(
              <ProductCard book={book} key={book.bookid}/>
            ))}
        </div>
    </div>
  )
}
