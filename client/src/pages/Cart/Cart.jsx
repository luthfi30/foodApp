import { React, useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, rupiah, url } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title card-items-item" key={index}>
                  <img src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p> {rupiah(item.price)}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{rupiah(item.price * cartItems[item._id])}</p>
                  <p onClick={() => removeFromCart(item._id)} className="remove">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{rupiah(getTotalCartAmount())}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>{rupiah(getTotalCartAmount() === 0 ? 0 : 12000)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{rupiah(getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 12000)}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
