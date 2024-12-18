import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, rupiah, url } = useContext(StoreContext);
    
  return (
    <div className="food-item">
<<<<<<< HEAD
      <img className="food-item-image" src={url + "/assets/" + image} alt="" />
=======
        <img
        className="food-item-image"
        src={image} // Menggunakan key image dari props
        alt={name}
      />
>>>>>>> 5bf7e30738d8df2c5e82224a2bdab6dab9bc56ea
      <div className="food-item-img-container">
        {!cartItems?.[id] ? (
          <img className="add" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
        ) : (
          <div className="food-item-counter">
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
        </div>

        <p className="food-item-description">{description}</p>
        <p className="food-item-price">{rupiah(price)}</p>
      </div>
    </div>
  );
};

export default FoodItem;
