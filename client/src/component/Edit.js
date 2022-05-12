import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";

function Edit() {

    const [newPrice,setNewPrice] = useState();
    let navigate = useNavigate();
    const {state:{name, author, price, id}} = useLocation();

    const editBook = () => {
        axios.put("http://127.0.0.1:5000/api/update", { price: newPrice, id: id }).then(
          (response) => {
            navigate('/dashboard')
          }
        );
      };
  


    return (
        <div>
          <div className="information">
            <label>Price : </label>
            <input
              type="number"
              onChange={(event) => {
                setNewPrice(event.target.value);
              }}
              value={newPrice}
            />
            <button onClick={editBook}>Save</button>
          </div>
        </div>
      );
    };
export default Edit