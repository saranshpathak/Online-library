import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from './component/LandingPage'
import LoginPage from './component/LoginInPage'
import RegisterPage from './component/RegisterPage'
import DashBoard from './component/DashBoard';
import AddBook from './component/AddBook';
import Edit from './component/Edit';

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
            <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/login" element={<LoginPage/>} />
          <Route exact path="/register" element={<RegisterPage/>} />
          <Route exact path="/dashboard" element={<DashBoard/>} />
          <Route exact path="/add" element={<AddBook/>} />
          <Route exact path="/edit" element={<Edit/>} />
        </Routes>
                
            </div>
        </Router>
    )
}



