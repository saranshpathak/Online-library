import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import axios from "axios";
import langingBG from '../assets/LibBG.jpg'
import { Link, useNavigate } from "react-router-dom";
import { logout, selectUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

const DashBoard = () => {
  const [bookList, setBooklist] = useState("");
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    axios.get("http://127.0.0.1:5000/api/books").then((response) => {
      setBooklist(response.data);
    });
  };

  const updateBook = (Name, Author, Price, Id) => {
    navigate("/edit", {
      state: {
        name: Name,
        author: Author,
        price: Price,
        id: Id,
      },
    });
  };

  const deleteBook = (id) => {
    axios.delete(`http://127.0.0.1:5000/api/delete/${id}`).then((response) => {
      setBooklist(
        bookList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };
  const backToLogin = (e) => {
    console.log("in-loggin");
    e.preventDefault();

    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="dashboard" >
      <div className="dashboard-Container" >
        <div className="header">
          <p>
            Welcome to <span id="title">Online Library</span>:
            <span id="quote">Books from anywhere</span>
          </p>
          <div className="header-right">
            {" "}
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
        <div className="books-container" style={HeaderStyle}>
          {bookList &&
            bookList.map((val) => {
              return (
                <div className="book" key={val.id}>
                  <div>
                    <div className="book-template">
                      <img src="" alt="Image not Available" />
                    </div>
                    <div className="book-details">
                      <h3>
                        Name: <span>{val.name}</span>
                      </h3>
                      <h3>
                        Price: <span> {val.price}</span>
                      </h3>
                      <h3>
                        Author: <span>{val.author}</span>
                      </h3>
                    </div>
                  </div>
                  {user.role === "Admin" ? (
                    <div>
                      <button
                        onClick={() => {
                          updateBook(val.name, val.author, val.price, val.id);
                        }}
                      >
                        Update
                      </button>

                      <button
                        onClick={() => {
                          deleteBook(val.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  ) : null}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background:`url(${langingBG})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}
export default DashBoard;
