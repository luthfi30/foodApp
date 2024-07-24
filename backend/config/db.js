import mongoose from "mongoose";
require("dotenv").config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`DB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

export default connectDB;
