import React from "react";
import { data } from "../data";
import "../css/order.css"; 
import { motion } from "framer-motion"; 
import CircularText from "../ui/Animation";

const Order = () => {
  return (
    < div className="order-container">
    <CircularText
  text="Welcome*To My*page*"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
/>
       
        <motion.h1
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Purchased Orders
        </motion.h1>

        
        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
        />
    

    <div className="purchage-card">
      {data.map((item, index) => (
        <div key={index} className="order-card">
          <div>
            <img src={item.img} alt="" className="order-image" />
          </div>
          
          <div className="order-details">
          <p className="order-text">{item.sub}</p>
            <p>Order ID: {item.orderid}</p>
            <p>Order Date: {item.date}</p>
            <p>Total Amount: {item.tamount}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Order;
