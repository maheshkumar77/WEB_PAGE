import React, { useState } from "react";
import "../css/navbar.css"; // Ensure the correct CSS path
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  return (
    <nav className="navbar">
      <div className="logo">MyStore</div>

      {/* Hamburger Icon for Mobile */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/neworder" className="nav-item">Order Details</Link></li>
        
        <li className="dropdown">
          <span className="nav-item">Order & Cart ▼</span>
          <div className="dropdown-content">
            <Link to="/neworder" className="dropdown-item">My Orders</Link>
            <Link to="/cartpage" className="dropdown-item">Cart</Link>
          </div>
        </li>

        <li><Link to="/login" className="nav-item login-btn">Login / Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
