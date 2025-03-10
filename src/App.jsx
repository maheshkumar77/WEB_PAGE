import React from "react";
import { Routes, Route } from "react-router-dom"; // No need to import BrowserRouter
import Navbar from "./component/Navbar";
import NewOrder from "./component/NewOrder";
import Order from "./component/Order";
import CartPage from "./component/CartPage";
import { CartProvider } from "./context/CartContext";
import Login from "./component/Login";
import Support from "./component/Support";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Order />} />
        <Route path="/neworder" element={<NewOrder />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Support/>
    </CartProvider>
  );
}

export default App;
