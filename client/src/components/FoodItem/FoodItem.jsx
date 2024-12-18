import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, rupiah, url } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        {/* Button Add di kanan atas */}
        <img className="add-btn-top-right" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add Icon" />

        {/* Gambar Utama */}
        <img className="food-item-image" src={image} alt={name} />

        {/* Button Add di bawah gambar */}
        <div className="add-btn-bottom">
          {!cartItems?.[id] ? (
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add Icon" />
          ) : (
            <div className="food-item-counter">
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add" />
            </div>
          )}
        </div>
      </div>
      <div className="food-item-info">
        <p className="food-item-name">{name}</p>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">{rupiah(price)}</p>
      </div>
    </div>
  );
};

export default FoodItem;
