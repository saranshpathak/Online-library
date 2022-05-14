import React,{useState} from 'react'
import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { logout, selectUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const user = useSelector(selectUser);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const[searchInput,setSearchInput] = useState("");

  const backToLogin = (e) => {
    console.log("in-loggin");
    e.preventDefault();

    dispatch(logout());
    navigate("/");
  }
  return (
    <div className="header">
          <div className="header-left">
          <p>
            Welcome to <span id="title">Online Library</span>:
            <span id="quote">Books from anywhere</span>
          </p>
          </div>
          <div className="header-middle">
             
          <input
          type="text"
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
          value={searchInput}
          placeholder="Search Book Here"
        />
          </div>
          <div className="header-right">
         
            {user.role == "Admin" ? (
              <div className="adduserrr">
                <Link to="/add">
                  {" "}
                  <p>Add New Book</p>{" "}
                </Link>
              </div>
            ) : null}
            <div className="logout-btn">
              <button className="logout-btn" onClick={backToLogin}>
                {" "}
                LogOut
              </button>
            </div>
          </div>
        </div>
  )
}

export default Header