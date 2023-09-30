import React, { useEffect, useState } from 'react'
import './Home.scss'
import { ProductCard } from '../components/ProductCard'
import { Products } from '../components/Products'
import { Sidebar } from '../Sidebar/Sidebar'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import { Filters } from '../components/Filters'
import axios from 'axios'

export const Home = () => {
  const [user] = useAuthState(auth)

  const [books, setBooks] = useState([])
  const [viewBooks, setViewBooks] = useState([])
  const [authorFilter, setAuthorFilter] = useState([])
  const [yearFilter, setYearFilter] = useState([])

  
  async function fetchProducts(){
    await axios.get('http://localhost:3001/books')
    .then((resp) => {setBooks(resp.data)})
    .catch((error)=>{
      console.log(error.message)
    })
  }
  
  useEffect(()=>{
    setViewBooks([...books])
  },[books])

  useEffect(()=>{
    // console.log("year/author changed - from Home.jsx")
    if(authorFilter.length>0 || yearFilter.length>0){
      if(authorFilter.length == 0){
        setViewBooks([...books.filter((book)=>{
          return yearFilter.includes(book.yearofpub)
        })])
        console.log("Book list changed!")
      }else if(yearFilter.length == 0){
        setViewBooks([...books.filter((book)=>{
          return authorFilter.includes(book.author.slice(1,-1))
        })])
        console.log("Book list changed!")
      }else{
        setViewBooks([...books.filter((book)=>{
          return authorFilter.includes(book.author.slice(1,-1)) && yearFilter.includes(book.yearofpub)
        })])
        console.log("Book list changed!")
      }
    }else{
      setViewBooks([...books])
    }
  },[yearFilter,authorFilter])

  useEffect(()=>{
    if(user){
      console.log(user)
    }
    fetchProducts()
  },[])

  return (
    <div className="home-container">
        {/* <h1>Liberatti</h1> */}
        {/* <div className="summa-box"></div> */}
        {/* <Sidebar></Sidebar> */}
        <Filters books={viewBooks} setAuthorFilter={setAuthorFilter} setYearFilter={setYearFilter} authorFilter = {authorFilter} yearFilter = {yearFilter}></Filters>
        <Products books={viewBooks}></Products>
    </div>
  )
}