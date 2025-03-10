import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../css/cartitem.css";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import SplashCursor from '../ui/SplashCursor'

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-page">
    <SplashCursor/>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <div className="cart-img">
              <img src={item.img} alt="cart item" />
            </div>
            <div className="cart-details">
              <p><strong>Order ID:</strong> {item.orderid}</p>
              <p>{item.sub}</p>
              <p><strong>Added On:</strong> {item.dateAdded}</p>
              <p><strong>Quantity:</strong> {item.quantity}</p>
              <p><strong>Total Price:</strong> ${item.totalPrice}</p>
            </div>
            <div className="cart-controls">
             
              <button className="delete-btn" 
                onClick={() => {
                  addToCart(item);
                  alert(`${item.orderid} item was added`);
                }}
              >
                <CiCirclePlus className="cart-btn" />
              </button>

             
              <button className="delete-btn" 
                onClick={() => {
                  removeFromCart(item.orderid);
                  alert(`${item.orderid} item was deleted`);
                }}
              >
                <CiCircleMinus className="cart-btn" />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
