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
    return <div>Loading...</div>;
  }

  const { address } = order; // Mendapatkan data alamat dari order

  return (
    <div className="invoice">
      <h3>Invoice ID: #{order._id}</h3>
      <div className="invoice-content">
        <div className="invoice-items">
          {order.items.map((item, index) => (
            <div key={index} className="invoice-item">
              <p>
                {item.name} x {item.quantity}
              </p>
              <p>{rupiah(item.price * item.quantity)}</p>
            </div>
          ))}
        </div>
        <hr />
        <div className="invoice-summary-address">
          <div className="invoice-summary">
            <p>
              <b>Total Amount:</b> {rupiah(order.amount)}
            </p>
            <p>
              <b>Status:</b> {order.status}
            </p>
            <p>
              <b>Order Date:</b> {new Date(order.date).toLocaleDateString()}
            </p>
            <p>
              <b>Payment Status:</b>
              {order.payment ? "Paid" : "Unpaid"}
            </p>
          </div>
          <hr />
          <div className="invoice-address">
            <h3>Shipping Address</h3>
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
        </div>
      </div>
    </div>
  );
};

export default Invoices;
