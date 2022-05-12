
import React, { useState, useEffect } from 'react'
import './Dashboard.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const DashBoard = () => {
    const [name,setName]  = useState('');
    const [price,setPrice] = useState(0);
    const [author,setAuthor] =  useState('');
    const [id,setId] = useState(0);
    const [bookList,setBooklist] = useState('');
    const [newPrice,setNewPrice] = useState(0);
    const [user, setUser]=useState(false);
    const [edit, setEdit]=useState(false);

    let navigate = useNavigate();

    useEffect(()=>{
      getBooks();
    },[])

    
    const getBooks = () => {
      axios.get("http://127.0.0.1:5000/api/books").then((response) => {
        setBooklist(response.data);
      });
    };
  
    const updateBook = (Name, Author, Price, Id) => {

      navigate('/edit', {state:{
        name:Name,
        author: Author,
        price:Price,
        id:Id
      }});

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
    <div className='dashboard'>
    <div className="dashboard-Container">
       <div className="header">
       <p>Welcome to Online Library:Books from anywhere</p>
       <div className="adduser">
         <Link to="/add"> Add New Book </Link>
       </div>
       </div>
       <div className="books-container">
       {bookList && bookList.map((val) => {
          return (
            <div className="book" key={val.id}>
              <div>
                  <div className="book-template">
                      <img src="" alt="a book" />
                  </div>
               <div className="book-details">
               <h3>Name: {val.name}</h3>
                <h3>Price: {val.price}</h3>
                <h3>Author: {val.author}</h3>
                   </div> 
               
              </div>
              <div>
                {/* <input
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setNewWage(event.target.value);
                  }}
                /> */}
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
            </div>
          );
        })}

       </div>

        </div>

        </div>
  )
}

export default DashBoard