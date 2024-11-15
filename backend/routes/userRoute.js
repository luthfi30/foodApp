import express from "express";
import { loginUser, registerUser, getUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/list", getUser);

export default userRouter;
