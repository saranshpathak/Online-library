import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const AddBook = () => {

    let navigate = useNavigate();

    const [name,setName]  = useState('');
    const [price,setPrice] = useState(0);
    const [author,setAuthor] =  useState('');
    const [id,setId] = useState(0);

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
    <div>
      <div className="information">
        <label>Name :</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
        />
        <label>Author : </label>
        <input
          type="text"
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
          value={author}
        />
        <label>Price : </label>
        <input
          type="number"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
          value={price}
        />
        <label>ID :</label>
        <input
          type="text"
          onChange={(event) => {
            setId(event.target.value);
          }}
          value={id}
        />
        <button onClick={addBook}>Add Book </button>
      </div>
    </div>
  );
};

export default AddBook;
