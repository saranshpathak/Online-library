import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import '../App.css';
function Edit() {
  const {
    state: { name, author, price, id },
  } = useLocation();
  const [newPrice, setNewPrice] = useState(price);
  const [newName, setNewName] = useState(name);
  const [newAuthor, setNewAuthor] = useState(author);
  let navigate = useNavigate();

  const editBook = () => {
    axios
      .put("http://127.0.0.1:5000/api/update", { name:newName, price: newPrice,author:newAuthor, id: id })
      .then((response) => {
        navigate("/dashboard");
      });
  };

  return (
    <div className="edit-container">
      <div className="information">
        <h2>Edit Your Book-{id}</h2>
       <div className="main-container">
        <label>Name  </label>
        <input
          type="text"
          onChange={(event) => {
            setNewName(event.target.value);
          }}
          value={newName}
        />
         <label>Price  </label>
        <input
          type="number"
          onChange={(event) => {
            setNewPrice(event.target.value);
          }}
          value={newPrice}
        />
        <label>Author  </label>
        <input
          type="text"
          onChange={(event) => {
            setNewAuthor(event.target.value);
          }}
          value={newAuthor}
        />
        </div>
        <button id='edit-btn' onClick={editBook}>Save</button>
      </div>
    </div>
  );
}
export default Edit;
