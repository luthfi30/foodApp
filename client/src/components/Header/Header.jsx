import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="overlay"></div>
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>Fastfood where ordering your favorite meals is as quick as a click, ensuring you enjoy delicious convenience every time you crave</p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
