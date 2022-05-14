import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import axios from "axios";
import langingBG from '../assets/LibBG.jpg'
import { useNavigate } from "react-router-dom";
import {  selectUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";

const DashBoard = () => {
  const [bookList, setBooklist] = useState("");
  const user = useSelector(selectUser);
  
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
 
  return (
    <div className="dashboard" >
      <div className="dashboard-Container" >
        <Header/>
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
