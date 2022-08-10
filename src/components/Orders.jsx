import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const navigate = useNavigate();
  const handlePostOrder = (e) => {
    e.preventDefault();
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const body = {
      client: "dany 6",
      products: [
        {
          qty: 10,
          product: "vodka de papas sabor limon",
          price: 500,
        },
      ],
    };
    console.log(headers);
    axios
      .post("http://localhost:8000/orders", body, { headers })
      .then((response) => {
        console.log("orderrr---------->", response.data);
      })
      .catch((err) => console.log(err.response.data));
  };
  return (
    <div className="col s12 m5">
      <div className="card-panel teal">
        <span className="white-text">tecito</span>
      </div>
      <div className="card-panel teal">
        <span className="white-text">cafecito</span>
      </div>
      <div className="card-panel teal">
        <span className="white-text">chelita</span>
      </div>
      <div className="card-panel teal">
        <span className="white-text">vinito</span>
      </div>
      <div>
        <input type="text" id="client" />
        <button className="waves-light btn" onClick={handlePostOrder}>
          Crear orden
        </button>
      </div>
    </div>
  );
};

export default Orders;
