import React, { useEffect, useState } from 'react'
import { CartProduct } from '../components/CartProduct'
import './Cart.scss'

export const Cart = ({userDetails}) => {

    const [cartDetails, setCartDetails] = useState([])

    console.log(userDetails.length>0? userDetails[0].cart.items:"Please login first")
    

    return (
        <div className='cart-wrapper'>
            <div className="cart-container">
                <div className="products">
                    <CartProduct item={userDetails[0].cart.items[0]} />
                    {userDetails.length>0? userDetails[0].cart.items.map((item)=>{
                        console.log(item);
                        <CartProduct item={item} />
                    }):"Please login first"}
                </div>
                <div className="bill-info">
                    <span>Total qty</span>
                    <span>Return Date</span>
                    <span>Subscription</span>
                </div>
            </div>
        </div>
    )
}
