import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import "dotenv/config";


//app config
const app = express();
const port = process.env.PORT || 4000;

const corsOptions = {
  origin: "https://food-app-sable-pi.vercel.app",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

//middlewares

app.use(express.json());

//db config
connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

// mongodb+srv://<username>:<password>@mymongodb.ekopuki.mongodb.net/?retryWrites=true&w=majority&appName=mymongodb
