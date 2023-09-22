import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import "./Register.scss"
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';

export const Register = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault()
       
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
              navigate("/login")
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              // ..
          });

    }
    return (
        <div className="register-container">
            <h1>Register</h1>
            <div className="register-form">
                <form action="">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleSubmit}>Register</button>
                </form>
                <Link to="/login" >Login now</Link>
            </div>
        </div>
    )
}
