import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const placeOrder = async (req, res) => {
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
    res.json({ success: true, data: "Order success" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to place order" });
  }
};

const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to fetch orders" });
  }
};

const orderDetail = async (req, res) => {
  try {
    const { orderId } = req.body;
    const order = await orderModel.findById(orderId);
    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }
    res.json({ success: true, data: order });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to fetch order details" });
  }
};

export { placeOrder, userOrders, orderDetail };
