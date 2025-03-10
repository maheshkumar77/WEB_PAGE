import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { data } from "../data";
import { CartContext } from "../context/CartContext";
import "../css/neworder.css";

const NewOrder = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="norder-main">
      <div className="leftdiv">
        <p>Available Items</p>
        {data.map((item, index) => (
          <div className="itemdiv" key={index}>
            <div className="img-div">
              <img src={item.img} alt="item" />
            </div>
            <div className="price-div">
              <p>{item.sub}</p>
              <p>Price: $100</p>
              <button className="add-cart-btn" onClick={() =>{
                 addToCart(item);
                 alert("Item added in cart Sucessfully");
              }}>
                <FaCartPlus /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

     
      <div className="centerdiv">
        <h2>Select an Item to Add</h2>
      </div>

   
      <div className="rightdiv">
        <p>Items List</p>
        {data.map((item, index) => (
          <div className="itemdiv" key={index}>
            <div className="img-div">
              <img src={item.img} alt="item" />
            </div>
            <div className="price-div">
              <p>{item.sub}</p>
              <p>Price: $100</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewOrder;
