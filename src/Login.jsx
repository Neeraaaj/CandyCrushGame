import React, { useState } from 'react'
import {getDatabase, ref, set} from 'firebase/database'
import { app } from './firebase'
import './login.css'
import { Link, redirect, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Navbar from './components/Navbar';
import toast, { Toaster } from 'react-hot-toast';

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const nav = useNavigate();

  const SignInUser = () => {
    signInWithEmailAndPassword(auth,email, password)
    .then(() => {
      toast.success("Logged in successfully! 🎉")
      setTimeout(() => {
        nav("/app", { state: { username } });
      }, 2000);
    })
  }
   return (
    <div className="grid">
    <div className="order__left centered">
       <div className="form">
          <h4>
          Unleash the Sweet Adventure: Sign up and Crush Candies in a World of Sugar-Coated Fun
          </h4>
          <input 
          type="text" 
          id="password" 
          name="password" 
          placeholder="username" 
          autoComplete="off"
          required 
          onChange={(e) => setUsername(e.target.value)}
          />
          <input 
          type="email" 
          id="username" 
          name="username" 
          placeholder="Email" 
          autoComplete="off" 
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}/ >
          <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder="Password" 
          autoComplete="off"
          value={password}
          required 
          onChange={(e) => setPassword(e.target.value)}
          />
          
          <button type="submit" 
          className="login__button"
          onClick={SignInUser} >Login</button>
          <Toaster />
          
          <div className="signup">
             <label className="remember_me">
             Don't have an account?</label>
             <Link to="signup">
              <strong>Sign up for free.</strong>
             </Link>
          </div>

       </div>
    </div>
    
    <div className="order__right centered no__overflow">
       <img className="img" src="https://cdn.dribbble.com/userupload/11523324/file/original-4186056db231ed6d4cd2f47fad475f8a.jpg?resize=1200x1145" alt="picture" />
    </div>
 </div>
  )
}

export default Login