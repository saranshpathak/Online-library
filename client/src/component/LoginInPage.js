import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

import '../App.css'

export default function SignInPage() {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const onSubmit = async (e)=>{
        e.preventDefault();
        const config = {
            headers: {
              "Content-Type": "Application/json",
            },
          };

          const state = {"email":email, "password":password}

          const data = await axios.post(
            "http://127.0.0.1:5000/api/login",
            state,
            config
          );

          console.log(data);

    }

    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" 
                     onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                      value={email}required />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password" name="password" 
                     onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                      value={password}
                    required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={onSubmit}>Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/dashboard">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}