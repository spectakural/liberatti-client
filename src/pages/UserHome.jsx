import React from 'react'
import { auth } from '../firebase' 
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'

export const UserHome = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }
    return (
        <div className="user-home-container">
            <h1>{!user ? "No access" : user.email}</h1>
            <button onClick={ handleLogout }>Signout</button>
        </div>

    )
}
