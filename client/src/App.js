import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import LandingPage from './component/LandingPage'
import LoginPage from './component/LoginInPage'
import RegisterPage from './component/RegisterPage'
import DashBoard from './component/DashBoard';
import AddBook from './component/AddBook';
import Edit from './component/Edit';

import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import './App.css'

export default function App() {
   const user = useSelector(selectUser);
   function PrivateRoute({ children }) {
  
    return user ? children : <Navigate to="/login" />;
  }
    return (
        <Router>
            <div>
            <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/login" element={<LoginPage/>} />
          <Route exact path="/register" element={<PrivateRoute><RegisterPage/></PrivateRoute>} />
          <Route exact path="/dashboard" element={<PrivateRoute><DashBoard/></PrivateRoute>} />
          <Route exact path="/add" element={<PrivateRoute><AddBook/></PrivateRoute>} />
          <Route exact path="/edit" element={<PrivateRoute><Edit/></PrivateRoute> }/>
        </Routes>
                
            </div>
        </Router>
    )
}



