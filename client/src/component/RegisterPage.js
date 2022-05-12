import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import '../App.css'

export default function SignUpPage() {
        const[name,setName] = useState();
        const[email,setEmail] = useState();
        const[password,setPassword] = useState();
        const[role,setRole] = useState();
        let navigate = useNavigate();


        const onSubmit = async (e)=>{
            e.preventDefault();
            const config = {
                headers: {
                  "Content-Type": "Application/json",
                },
              };

              const state = {"name":name, "email":email, "password":password, "role":role}

              const data = await axios.post(
                "http://127.0.0.1:5000/api/register",
                state,
                config
              );
              console.log(data);
        }


    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" 
                    onChange={(event) => {
                        setName(event.target.value);
                        }}
                        value={name}required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email"
                    onChange={(event) => {
                        setEmail(event.target.value);}}
                        value={email} required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password"
                    onChange={(event) => {
                        setPassword(event.target.value);}}
                        value ={password} required />
                </p>


                <div className="group">
          <div className="dropDown_container">
            <div className="dropDown_inner_container">
              <h3>Choose a Storage Medium : </h3>
              <select className="dropDown_style" value={role} onChange={(event) => {
                        setRole(event.target.value);
                        }}>
                <option className="dropDown_option_style" value="Not Selected">
                  Not Selected
                </option>
                <option className="dropDown_option_style" value="Database">
                  Reader
                </option>
                <option className="dropDown_option_style" value="Local File">
                  Admin
                </option>
              </select>
            </div>
            <h2>{`You selected ${role}`}</h2>
          </div>
        </div>
                {/* <p>
                    <label>Role</label><br/>
                    <input type="text" name="first_name" 
                    onChange={(event) => {
                        setRole(event.target.value);
                        }}
                        value={role}required />
                </p> */}
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={onSubmit}>Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}