import { React, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import MyOrders from "./pages/MyOrders/MyOrders";
import Invoices from "./pages/Invoices/Invoices";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <div className="app">
        {showLogin ? <Login setShowLogin={setShowLogin} /> : null}
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/invoice/:id" element={<Invoices />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
