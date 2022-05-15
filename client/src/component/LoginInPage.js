import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { login } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../App.css'
import langingBG from '../assets/libPic2.jpg'



export default function SignInPage() {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const dispatch = useDispatch();
    const[error,setError] = useState('');
    let navigate = useNavigate();
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
          ).then((data)=>{
              dispatch(login({
                  name:data.data.user.name,
                  role:data.data.user.role,
              }));
              navigate("/dashboard");

              console.log(data.data.user.role);
          }).catch((err)=>{
              window.alert('Email Or Password Incorrect')
              setError(err.message);
          })
          if(data.status===200){window.alert('Logged-In')}
          


    }

    return (
        <div className="login" style={HeaderStyle}>
        <div className="login-container">
            <h2 style={{color:'black'}}>Sign in to us</h2>
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
            {error}
            <footer className='foo'>
                <p >First time? <Link to="/register">Create an account</Link>.</p>
                <p ><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </div>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background:`url(${langingBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
