import React, { useEffect } from 'react'
import { auth } from '../firebase' 
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import './UserHome.scss'

export const UserHome = ({userDetails}) => {

    const navigate = useNavigate()
    const [user] = useAuthState(auth)

    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
    })

    // console.log("From user-home V")
    // console.log(userDetails)
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
            console.log(error)
        });
    }

    const handleMembership =()=>{
        
    }

    const handleUpdateProfile =()=>{

    }

    return (
        <div className="user-home-wrapper">
            {/* <h1>{!user ? "No access" : user.email}</h1> */}
            <div className="user-home-container">
                <span>Welcome back, <span className='user-home-container-name'>{userDetails.length>0? userDetails[0].name:"Loading..."}</span></span>
                <div className="user-home-options">
                    <button onClick={ handleMembership }>Buy Membership</button>
                    <button onClick={ () => navigate("/cart") }>Your Cart</button>
                    <button onClick={ handleUpdateProfile }>Update Profile</button>
                    <button onClick={ handleLogout }>Signout</button>
                </div>
            </div>
        </div>
    )
}
