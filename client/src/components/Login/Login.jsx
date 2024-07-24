import { React, useState, useContext } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
const Login = ({ setShowLogin }) => {
  const { setToken, url } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onLogin = async (e) => {
    e.preventDefault();

    let newUrl = url;
    console.log(newUrl);
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);

      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };
  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-container">
        <div className="login-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} className="close" alt="" />
        </div>
        <div className="login-input">
          {currState === "Login" ? <> </> : <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Your Name" required />}
          <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Your Email" required />
          <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder="Your password" required />
        </div>
        <button type="submit">{currState === "Sign up" ? "Create account" : "Sign in"}</button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use privacy & policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create an account ? <span onClick={() => setCurrState("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account ? <span onClick={() => setCurrState("Login")}>Sign in</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
