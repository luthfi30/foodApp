import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const { getTotalCartAmount, rupiah, token, food_list, cartItems, url } = useContext(StoreContext);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const navigate = useNavigate();

  const placeOrder = async (e) => {
    e.preventDefault();
    let ordetItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        ordetItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: ordetItems,
      amount: getTotalCartAmount() + 12000,
    };
    let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
    navigate("/myorders");
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/cart");
      alert("Please login first");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input name="firstname" onChange={onChangeHandler} value={data.firstname} type="text" placeholder="First Name" />
          <input name="lastname" onChange={onChangeHandler} value={data.lastname} type="text" placeholder="Last Name" />
        </div>
        <input name="email" onChange={onChangeHandler} value={data.email} className="" type="email" placeholder="Email" />
        <input name="address" onChange={onChangeHandler} value={data.address} className="" type="text" placeholder="Address" />
        <div className="multi-fields">
          <input name="city" onChange={onChangeHandler} value={data.city} className="" type="text" placeholder="City" />
          <input name="state" onChange={onChangeHandler} value={data.state} className="" type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input name="zip" onChange={onChangeHandler} value={data.zip} type="text" placeholder="Zip Code" />
          <input name="country" onChange={onChangeHandler} value={data.country} className="" type="text" placeholder="country" />
        </div>
        <input name="phone" onChange={onChangeHandler} value={data.phone} className="" type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
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
          <button>Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
