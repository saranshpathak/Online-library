import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../App.css';
import langingBG from '../assets/libPic2.jpg'
const AddBook = () => {

    let navigate = useNavigate();

    const [name,setName]  = useState('');
    const [price,setPrice] = useState();
    const [author,setAuthor] =  useState('');
    const [id,setId] = useState();

    const addBook = async(e) => {

        e.preventDefault();

        await axios.post("http://127.0.0.1:5000/api/create", {
          name: name,
          price: price,
          author: author,
          id:id,
          
        }).then(() => {
          navigate('/dashboard')
        });
      };


  return (
    <div className="edit-container" style={HeaderStyle}>
      <div className="information">
        <h2>Add New Book</h2>
       <div className="main-container">
        <label>Name  </label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
        />
         <label>Price  </label>
        <input
          type="number"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
          value={price}
        />
        <label>Author  </label>
        <input
          type="text"
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
          value={author}
        />
         <label>Book Id  </label>
        <input
          type="text"
          onChange={(event) => {
            setId(event.target.value);
          }}
          value={id}
        />
        </div>
        <button id='edit-btn' onClick={addBook}>Add</button>
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

export default AddBook;
