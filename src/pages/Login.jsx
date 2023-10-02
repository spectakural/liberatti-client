import React, { useEffect, useState } from 'react'
import './Login.scss'
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export const Login = () => {

    const navigate = useNavigate()
    const [user] = useAuthState(auth)

    useEffect(()=>{
        if(user){
            navigate("/user-home")
        }
    },[user])

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if(!user){
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/user-home")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
        }else{
            navigate('/user-home')
        }
       
    }

    return (
        <div className="login-container">
            <div className="login-side-frame">
                {/* <img src="./src/static/bg2.png" alt="background picture" id='login-bg-img'/> */}
                <div id="login-book-img">
                    <img src="./src/static/OJK9411.png" alt="background picture"/>
                    <span>Rent books at cheapest subscription today!</span>
                </div>
            </div>
            <div className="login-form">
                <div className="login-box">
                    <h3>User Login</h3>
                    <form action="">
                        <div className="login-input-box">
                            <input type="text" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <span>Email</span>
                        </div>
                        <div className="login-input-box">
                            <input type="password" name="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <span>Password</span>
                        </div>
                        <button onClick={handleLogin}>Login</button>
                    </form>
                    <Link to="/register" >Register now</Link>
                </div>
            </div>
        </div>
    )
}
