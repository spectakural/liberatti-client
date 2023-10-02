import React from 'react'
import { useState,useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import "./Register.scss"
import { useAuthState } from 'react-firebase-hooks/auth'
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
import axios from 'axios';

export const Register = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phno, setPhno] = useState("");

    useEffect(()=>{
        if(user){
            navigate("/user-home")
        }
    },[user])

    const handleRegister = async (e) => {
        e.preventDefault()
        
        if(!user){
            axios.post("http://localhost:3001/users",{
                name:name,
                email:email,
                phno:phno,
                subStatus:0,
                cart:{
                    total:0,
                    items:[]
                }
            })
            .then((response)=>{
                console.log(response)
            })
            .catch((error)=>{
                console.log(error)
            })

            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                // navigate("/login")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });

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
            navigate("/user-home")
        }
        
        // navigate("/login")
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
                    <h3>Register now</h3>
                    <form action="">
                        <div className="login-input-box">
                            <input type="text" name="name" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
                            <span>Name</span>
                        </div>
                        <div className="login-input-box">
                            <input type="text" name="phno" id="phno" required value={phno} onChange={(e) => setPhno(e.target.value)} />
                            <span>Phone number</span>
                        </div>
                        <div className="login-input-box">
                            <input type="text" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <span>Email</span>
                        </div>
                        <div className="login-input-box">
                            <input type="password" name="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <span>Password</span>
                        </div>
                        <button onClick={handleRegister}>Register</button>
                    </form>
                    <Link to="/login" >Login now</Link>
                </div>
            </div>
        </div>
    )
}
