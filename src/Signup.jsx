import React, { useState } from 'react'
import './login.css'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from './firebase'
import { Link, redirect, useNavigate } from 'react-router-dom';
import toast, {Toaster} from 'react-hot-toast';

const auth = getAuth(app);

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            toast.success('Account created successfully!🎉', {
                style: {
                    fontFamily: "monospace",
                    fontSize: "larger"
                }
            });
            setTimeout(() => {
                navigate("/");
            }, 1000);
        })
        .catch((err) => console.log(err))
    }
  return (
    <div class="grid">
    <div class="order__left centered">
       <div class="form">
          <h4>
          Sweet Sign-Up Defense: Crush the 3D Candy Onslaught and Secure Your Sugary Success!
          </h4>

          <input type="email" 
          id="username" 
          name="email" 
          placeholder="Email" 
          autocomplete="off"
          value={email} 
          required
          onChange={(e) => setEmail(e.target.value)} / >
          <input type="password" 
          id="password" 
          name="password" 
          placeholder="Password" 
          autocomplete="off"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} />
          
          <button type="submit" class="login__button"
          onClick={createUser}>Sign Up</button>
          
          <div class="signup">
             <label class="remember_me">
             Already have an account?</label>
             <Link to="/">
                <strong>Sign in here.</strong>
             </Link>
             <Toaster />
          </div>

       </div>
    </div>
    
    <div class="order__right centered no__overflow">
       <img class="img" src="https://cdn.dribbble.com/userupload/11524070/file/original-e163b04899a7c2661ecef0f02f144106.jpg?resize=1200x1149" alt="picture" />
    </div>

 </div>
  )
}

export default Signup