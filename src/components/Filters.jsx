import React, { useEffect, useState } from 'react'
import Multiselect from 'multiselect-react-dropdown'
import "./Filters.scss"

export const Filters = ({books, setAuthorFilter, setYearFilter, authorFilter, yearFilter}) => {

    const authors = Array.from(new Set(books.map((book)=>{return book.author.slice(1,-1)}))).map(author =>{
        return {author:author}
    }).sort((a,b)=>(a.author > b.author) ? 1:-1)


    const pubYears = Array.from(new Set(books.map(book => {return book.yearofpub}).sort())).map(year => {return {year:year}})
    
    useEffect(()=>{
        console.log("Year/Author changed")
    },[authorFilter,yearFilter])

    // [...books.filter((book)=>{
    //     return item.author === book.author
    // })]
    
    return (
        <div className='filter-container'>
            <div className="author">
                <h3>Author</h3>
                <Multiselect 
                    options={authors}
                    displayValue='author'
                    onSelect={(list, item)=>{
                        setAuthorFilter([...list.map((author)=>{return author.author})])
                    }}
                    onRemove={(list, item)=>{
                        setAuthorFilter([...list.map((author)=>{return author.author})])
                    }}
                />
            </div>
            <div className="year">
                <h3>Year of Publication</h3>
                <Multiselect 
                    options={pubYears}
                    displayValue='year'
                    onSelect={(list, item)=>{
                        setYearFilter([...list.map((year)=>{return year.year})])
                    }}
                    onRemove={(list, item)=>{
                        setYearFilter([...list.map((year)=>{return year.year})])
                    }}
                />
            </div>
        </div>
    )
}
