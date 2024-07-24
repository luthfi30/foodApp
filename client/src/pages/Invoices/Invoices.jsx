import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import { useParams } from "react-router-dom";
import "./Invoices.css";

const Invoices = () => {
  const { url, token, rupiah } = useContext(StoreContext);
  const [order, setOrder] = useState(null);
  const { id } = useParams();

  const fetchOrderDetails = async () => {
    try {
      const response = await axios.post(`${url}/api/order/orderdetail`, { orderId: id }, { headers: { token } });
      setOrder(response.data.data);
    } catch (error) {
      console.error("Failed to fetch order details", error);
    }
  };

  useEffect(() => {
    if (token && id) {
      fetchOrderDetails();
    }
  }, [token, id]);

  if (!order) {
    return <div className="invoice">Loading...</div>;
  }

  const { address, items, amount, status, date, payment } = order; // Destructure data order

  return (
    <div className="invoice">
      <div className="invoice-address">
        <h3>Invoice ID: #{order._id}</h3>

        <p>
          <b>Street:</b> {address.address}
        </p>
        <p>
          <b>City:</b> {address.city}
        </p>
        <p>
          <b>Phone:</b> {address.phone}
        </p>
        <p>
          <b>Zip Code:</b> {address.zip}
        </p>
      </div>

      <div className="invoice-content">
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Item Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{rupiah(item.price)}</td>
                <td>{rupiah(item.price * item.quantity)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="invoice-summary">
          <p>
            <b>Total Amount :</b>
            <span>{rupiah(amount)}</span>
          </p>
          <p>
            <b>Status :</b>
            <span>{status}</span>
          </p>
          <p>
            <b>Payment Status:</b>
            <span>{payment ? "Paid" : "Unpaid"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
